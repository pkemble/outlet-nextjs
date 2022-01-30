import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async () => {
    const allThePosts = await prisma.posts.findMany({
        include: {
            rich_text: true,
            notebooks: true
        }
    });
    return allThePosts;
};

export const getNotebooks = async () => {
    const notebooks = await prisma.notebooks.findMany();
    return notebooks;
}

export const getNotebookPosts = async(n_id) => {
    const postsByNotebook = await prisma.posts.findMany({
        where: { notebook_id: n_id }
    })
    return postsByNotebook;
}