import prisma from "../../prisma.d.ts";

export const getPosts = async (res) => {
    res = await prisma.posts.findMany({
        include: {
            notebooks: true
        },
        orderBy: {
            created_at: 'desc'
        }
    });
    return res;
};



export const getNotebooks = async () => {
    const notebooks = await prisma.notebooks.findMany();
    return notebooks;
}

export const getPostsByNotebook = async (n_id) => {
    const postsByNotebook = await prisma.posts.findMany({
        where: {
            notebook_id: parseInt(n_id),
        },
        include: {
            notebooks: true
        }
    })
    return postsByNotebook;
}