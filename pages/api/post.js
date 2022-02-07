//import { prisma } from "../../lib/prisma";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export default function handler(req, res) {
    const post = req.body;
    const result = req.method === 'PUT' ? updatePost(post) : createPost(post);
    return res.json(result);
}

async function updatePost(post) {
    const result = await prisma.posts.update({
        where: {
            id: parseInt(post.id)
        },
        data: {
            notebook_id: post.notebook_id,
            title: post.title,
            rich_text: post.rich_text,
        }
    });
    return result;
}

async function createPost(post) {
    const result = await prisma.posts.create({
        data: {
            notebook_id: parseInt(post.notebook_id),
            title: post.title,
            rich_text: post.rich_text,
        }
    });
    return result;
}
