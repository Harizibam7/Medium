import z from 'zod';



export const signUp = z.object({
    email:z.string().email(),
    password:z.string().min(6)
});

export type signUpType = z.infer<typeof signUp>;

export const signIn = z.object({
    email :z.string().email(),
    password:z.string().min(6)
});

export type signInType = z.infer<typeof signIn>;

export const createPost = z.object({
    title:z.string(),
    content:z.string()
});

export type createPostType = z.infer<typeof createPost>;

export const updatePost = z.object({
    id:z.string(),
    title:z.string(),
    content:z.string()
});

export type updatePostType = z.infer<typeof updatePost>;
