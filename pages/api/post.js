import prisma from "../../prisma.d.ts";
import moment from "moment";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default function handler(req, res) {
    const post = req.body;
    if (req.method === 'DELETE') {
        const result = deletePost(post);
        return res.json(result);
    }
    const result = post.id === undefined ? createPost(post) : updatePost(post);
    return res.json(result);
}

async function updatePost(post) {
    try {
        await prisma.posts.update({
            where: {
                id: parseInt(post.id)
            },
            data: {
                notebooks: {
                    connect: {
                        id: parseInt(post.notebook_id),
                    },
                },
                title: post.title,
                content: post.content,
                created_at: post.created_at
            }
        });
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            console.log(e.message)
        }
        throw e;
    }
}

async function createPost(post) {
    try {
        await prisma.posts.create({
            data: {
                notebooks: {
                    connect: {
                        id: parseInt(post.notebook_id)
                    }
                },
                title: post.title,
                content: post.content,
                created_at: moment(post.created_at).toDate()
            }
        });
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            console.log(e.message)
        }
        throw e;
    }

}

async function deletePost(post) {
    try {
        await prisma.posts.delete({
            where: {
                id: parseInt(post.id)
            }
        });
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            console.log(e.message)
        }
        throw e;
    }
}
