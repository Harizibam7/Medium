import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign} from 'hono/jwt'
import { signIn, signUp } from '@hawkzharizibam/medium-common';
export const userRoutes = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},Variables:{
        userId:any
    }
}>();


userRoutes.post('/signup',async(c:any) => {
    const prisma = new PrismaClient({
      datasourceUrl:  c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const {success}  = signUp.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        error:"Invalid Syntax"
      });
    }
    try{
      const user = await prisma.user.create({
        data:{
          email:body.email,
          password:body.password,
        }
      }); 
      const token = await sign({id:user.id},c.env.JWT_SECRET);
      return c.json({
        jwt:token
     })
  }catch(e){  
    c.status(401);
    return c.json({
      error:"Server down"
    });
  }
})
  
userRoutes.post('/signin', async(c:any)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const {success}  = signIn.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        error:"Invalid Syntax"
      });
    }
    try{
      const user = await prisma.user.findUnique({
        where:{
          email:body.email,
          password:body.password
        }
      });
      if(!user){
        c.status(403)
        return c.json({error:"User not found"})
      }
      const jwt = await sign({id:user.id}, c.env.JWT_SECRET);
      return c.json({jwt})
  }catch(e){
    c.status(401);
    return c.json({error:"Server"});
  }
})
