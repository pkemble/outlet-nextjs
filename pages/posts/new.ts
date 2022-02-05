import prisma from '../../.db';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { title, body, notebook } = req.body
    const result = await prisma.post.create({
      data: {
        title,
        body,
      },
    })
    res.json(result)
}