import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

import { createBlogInput, updateBlogInput } from "@kant-npm/medium-common";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }, 
    Variables: {
        userId: number
    }
}>();


blogRouter.use("/*", async(c, next) => {
    try {
        const token = c.req.header("Authorization") || "";

        if(!token.startsWith("Bearer ")) {
            c.status(403);
            return c.json({
                message: "Unauthoried"
            })
        }   


        const jwt = token.split(" ")[1];
        const payload = await verify(jwt, c.env.JWT_SECRET);

        if(!payload || typeof payload.id !== 'number') {
            c.status(403);
            return c.json({
                message: "Unauthorized"
            })
        }

        c.set("userId", payload.id);
        await next();

    } catch(err) {
        c.status(403);
        c.json({
            message: "User unauthorized"
        })
    }
})

blogRouter.post('/blog', async(c) => {

    const prisma = new  PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());
      
    
    
      try {

        const body = await c.req.json();
        const { success } = createBlogInput.safeParse(body);
    
        if(!success) {
            c.status(411);
            return c.json({
                message: "Wrong inputs"
            })
        }

        const userId = c.get("userId");

        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: Number(userId)
            }
        })

        return c.json({
            message: "Your blog was posted",
            blogId: blog.id
        })
      }
      catch(err) {
        return c.json({
            message: "Error posting blog !",
        })
      }
})



blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const body = await c.req.json();

        const { success } = updateBlogInput.safeParse(body);
        if(!success) {
            c.status(411);
            return c.json({
                message: "Wrong inputs"
            })
        }
        const userId = c.get("userId");

        const blog = await prisma.blog.findFirst({
            where: {
                id : body.id,
                authorId: userId
            }
        })

        if(!blog) {
            return c.json({
                message: "Blog not found"
            }, 404);
        }

        const updatedBlog = await prisma.blog.update({
            where: {
                authorId: Number(userId),
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })

        return c.json({
            blogId: updatedBlog
        })
    } catch(err) {
        return c.json({
            message: "Error in updating the blogs"
        }, 500)
    }
})




blogRouter.get("/bulk", async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blogs = await prisma.blog.findMany();
        return c.json({
            blogs
        })
    } 
    catch(err) {
        return c.json({
            message: "Error in fetching all the blogs"
        })
    }

    
})

blogRouter.get('/:id', async(c) => {

    const prisma = new  PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
      }).$extends(withAccelerate());

      try {
        const {id} = c.req.param();

        const blog = await prisma.blog.findFirst({
          where: {
              id: Number(id) 
          }
        })
  
        return c.json({
          blog
        });
      } catch(err) {
        return c.json({
            message: "Error in getting blog"
        })
      }  
})



