import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async () => {
    const allThePosts = await prisma.posts.findMany({
        include: {
            rich_text: true
        }
    });
    return allThePosts;
};