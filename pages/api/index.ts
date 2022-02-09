import { NextApiRequest, NextApiResponse } from "next";
import { getPosts, getNotebooks } from "./dataProvider";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {
        const functionName = req.body;
        switch (functionName.func) {
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