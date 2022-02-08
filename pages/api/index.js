
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient;
import prisma from "../../prisma.d.ts";

export const getPosts = async () => {
    
    const allThePosts = await prisma.posts.findMany({
        include: {
            notebooks: true
        },
        orderBy: {
            created_at: 'desc'
        }
    });
    return serializeData(allThePosts);
};


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
            notebooks: true
        }
    })
    return serializeData(postsByNotebook);
}

function serializeData(data) {
    return JSON.parse(JSON.stringify(data, (_key, value) => typeof value === 'bigint' ? value.toString() : value));
}