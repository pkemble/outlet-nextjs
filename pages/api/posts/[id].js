import prisma from "../../../prisma.d.ts";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default function handler(req, res) {
    const {id} = req.query
    if (req.method === 'DELETE') {
        const result = deletePost(id);
        return res.json(result);
    }
    //Placeholder for future single post actions. Right now update is handled in /api/posts.js
    //const result = post.id === undefined ? createPost(post) : updatePost(post);
    return res.json(result);
}

async function deletePost(id) {
    try {
        await prisma.posts.delete({
            where: {
                id: parseInt(id)
            }
        });
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            console.log(e.message)
        }
        throw e;
    }
}
