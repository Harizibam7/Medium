import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
export const blogRoutes = new Hono();
blogRoutes.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization');
    if (!jwt) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    try {
        const payload = await verify(jwt, c.env.JWT_SECRET);
        if (!payload) {
            c.status(401);
            return c.json({ error: "unauthorized" });
        }
        else {
            c.set("userId", payload.id);
            await next();
        }
    }
    catch (e) {
        c.status(403);
        c.json({
            message: "You are not logged in"
        });
    }
});
blogRoutes.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const userId = c.get('userId');
    const body = await c.req.json();
    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId,
            }
        });
        return c.json({
            id: post.id
        });
    }
    catch (e) {
        c.status(401);
        return c.json({
            error: "Server down"
        });
    }
});
blogRoutes.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const userId = c.get('userId');
    const body = await c.req.json();
    try {
        const post = await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId
            }, data: {
                title: body.title,
                content: body.content,
            }
        });
        return c.json({
            id: post.id
        });
    }
    catch (e) {
        c.status(401);
        return c.json({
            error: "Server down"
        });
    }
});
blogRoutes.get('/:id', async (c) => {
    const id = c.req.params('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const post = await prisma.post.findUnique({
            where: id
        });
        return c.json(post);
    }
    catch (e) {
        c.status(401);
        return c.json({
            error: "Server down"
        });
    }
});
blogRoutes.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const posts = await prisma.post.findMany();
        return c.json(posts);
    }
    catch (e) {
        c.status(401);
        return c.json({
            error: "Server down"
        });
    }
});
