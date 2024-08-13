import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from 'hono/jwt'
import { signInInput, SignInInput, signUpInput } from "@kant-npm/medium-common";
import z from "zod"

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async(c) => {

    const prisma = new  PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());
  
    const body = await c.req.json()
    const { success } = signUpInput.safeParse(body);

    if(!success) {
      c.status(411);
      return c.json({
        message: "Wrong inputs"
      });
    }
  
    try {

      const findUser = await prisma.user.findUnique({
        where: {
          username: body.username
        }
      })

      if(findUser) {
        c.status(404);
        return c.json({
          message: "User already exist"
        })
      }
  
      const user = await prisma.user.create({
        data: {
          name: body.name,
          username: body.username,
          password: body.password
        }
      })
  
      const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
  
      return c.json({
        message: "User signed Up",
        jwt: jwt
      })
  
    } 
    catch(err) {
        c.status(403);
        return c.json({
          message: "Error in signin In"
        })
    } 
  
  })
  
  userRouter.post('/signin', async(c) => {
    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = signInInput.safeParse(body);
    if(!success) {
      c.status(411);
      return c.json({
        message: "Wrong inputs"
      })
    }

    try {
  
      const user = await prisma.user.findUnique({
        where: {
          username: body.username
        }
      });
  
      if (!user) {
        c.status(403);
        return c.json({ error: "User doesn't exist" });
      }
  
      if(user?.password !== body.password) {
        c.status(401);
        return c.json({
          message: "Incorrect password"
        })
      }
  
      
  
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ 
        message: "User Signed In",
        jwt: jwt,
      });
  
    } 
    catch(err) {
      return c.json({
        message: "Error in signin In" 
      })
    }
  })