import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {verify} from 'hono/jwt'
import { createPost, updatePost } from '@hawkzharizibam/medium-common';

export const blogRoutes = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
    Variables:{
        userId:any
    }
}>();

blogRoutes.use('/*',async(c,next) =>{

    const jwt = c.req.header('Authorization');
    if(!jwt){
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    
    try{
        const payload = await verify(jwt,c.env.JWT_SECRET);
        if(!payload){
            c.status(401);
            return c.json({ error: "unauthorized" });
        }else{
            c.set("userId", payload.id);
            await next();
        }
    }catch(e){
        c.status(403);
        c.json({
            message:"You are not logged in"
        });
    }
});

blogRoutes.post('/',async (c:any)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId');
    const body = await c.req.json();
    
    const {success} = createPost.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        error:"Invalid Syntax"
      });
    }
    try{
        const post = await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId: userId,
            }
        });
        return c.json({
            id:post.id
        });
    }
    catch(e){
        c.status(401);
        return c.json({
            error: "Server down"
        });
    }
})
  
blogRoutes.put('/',async(c:any)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId');
    const body = await c.req.json();
    const {success}  = updatePost.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        error:"Invalid Syntax"
      });
    }
    try{
        const post = await prisma.post.update({
            where:{
                id:body.id,
                authorId: userId
            },data:{
                title:body.title,
                content:body.content,
            }
        });
        return c.json({
            id:post.id
        });
    }catch(e){
        c.status(401);
        return c.json({
            error:"Server down"
        });
    }
})

blogRoutes.get('/bulk', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const posts = await prisma.post.findMany();

	return c.json({
        posts:posts
    });
})

blogRoutes.get('/:id',async(c:any)=>{
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const post = await prisma.post.findUnique({
            where:{
                id:id
            }
        });

        return c.json(post);
    }catch(e){
        c.status(401);
        return c.json({
            error:"Server down"
        });
    }
})
  
