import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,jwt,sign, verify} from 'hono/jwt'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:String
  }
}>()

app.get('/', (c:any) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup',async(c:any) => {
  const prisma = new PrismaClient({
    datasourceUrl:  c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();

  const user = await prisma.user.create({
    data:{
      email:body.email,
      password:body.password
    }
  });

  const token = await sign({id:user.id},c.env.JWT_SECRET);
  
  return c.json({
    jwt:token
  })
})

app.post('/api/v1/user/signin',(c:any)=>{
  return c.text('This is from signin')
})

app.post('/api/v1/blog',(c:any)=>{
  return c.text('This from Blog')
})

app.put('/api/v1/blog',(c:any)=>{
  return c.text('This is from put blog')
})

app.get('/api/v1/blog/:id',(c:any)=>{
  return c.text('This is from get method')
})

app.get('/api/v1/blog/bulk',(c:any) => {
  return c.text('This is from get ')
})

export default app
