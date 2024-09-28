import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup',(c) => {
  return c.text('This is from signup')
})

app.post('/api/v1/user/signin',(c)=>{
  return c.text('This is from signin')
})

app.post('/api/v1/blog',(c)=>{
  return c.text('This from Blog')
})

app.put('/api/v1/blog',(c)=>{
  return c.text('This is from put blog')
})

app.get('/api/v1/blog/:id',(c)=>{
  return c.text('This is from get method')
})

app.get('/api/v1/blog/bulk',(c) => {
  return c.text('This is from get ')
})

export default app
