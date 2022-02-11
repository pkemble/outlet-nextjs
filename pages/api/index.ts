import { NextApiRequest, NextApiResponse } from "next";
import { getPosts, getNotebooks, getPostsByNotebook } from "./dataProvider";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {
        const functionName = req.body;
        switch (functionName.func) {
            case 'getPostsByNotebook':
                const notebook_id = functionName.notebook_id;
                const postsByNotebook = {
                    "posts": await getPostsByNotebook(notebook_id),
                    "notebooks": await getNotebooks()
                };
                res.json(postsByNotebook);
                res.status(200);
                return res;
            case 'getPosts':
                const posts = { "posts": await getPosts() };
                res.json(posts);
                res.status(200);
                return res;
            case 'getNotebooks':
                const notebooks = { "notebooks": await getNotebooks() };
                res.json(notebooks);
                res.status(200);
                return res;
            default:
                return res.status(500);
        }
    } else {
        const data = {
            "posts": await getPosts(),
            "notebooks": await getNotebooks()
        }
        res.json(data);
        res.status(200);
        return res;
    };
}