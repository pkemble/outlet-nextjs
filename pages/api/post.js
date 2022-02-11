import prisma from "../../prisma.d.ts";
import moment from "moment";

export default function handler(req, res) {
    const post = req.body;
    const result = post.id === undefined ?  createPost(post) : updatePost(post);
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
            content: post.content,
        }
    });
    return result;
}

async function createPost(post) {
    console.log(post)
    const result = await prisma.posts.create({
        data: {
            notebooks: {
                connect: {
                    id: parseInt(post.notebooks.id) 
                }
            },
            title: post.title,
            content: post.content,
            created_at: moment(post.created_at).toDate()
        }
    });

    return result;
}
