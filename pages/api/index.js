import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async () => {
    const allThePosts = await prisma.posts.findMany({
        include: {
            rich_text: true,
            notebooks: true
        }
    });
    return serializeData(allThePosts);
};


export default async function editNotebook(req, res) {
    const {notebook} = req.body;
    const result = await prisma.notebooks.update(notebook);
    res.JSON(result);
}

export const getNotebooks = async () => {
    const notebooks = await prisma.notebooks.findMany();
    return serializeData(notebooks);
}

export const getPostsByNotebook = async(n_id) => {
    const postsByNotebook = await prisma.posts.findMany({
        where: {
            notebook_id: parseInt(n_id),
        },
        include: {
            rich_text: true,
            notebooks: true
        }
    })
    return serializeData(postsByNotebook);
}

function serializeData(data) {
    return JSON.parse(JSON.stringify(data, (_key, value) => typeof value === 'bigint' ? value.toString() : value));
}