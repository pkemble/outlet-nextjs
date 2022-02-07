//import { prisma } from "../../lib/prisma";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export default function handler(req, res) {
    const notebook = req.body;
    const result = req.method === 'PUT' ? updateNotebook(notebook) : createNotebook(notebook);
    return res.json(result);
}

async function updateNotebook(notebook) {
    const result = await prisma.notebooks.update({
        where: {
            id: parseInt(notebook.id)
        },
        data: {
            title: notebook.title,
            description: notebook.description,
        }
    });
    return result;
}

async function createNotebook(notebook) {
    const result = await prisma.notebooks.create({
        data: {
            title: notebook.title,
            description: notebook.description,

        }
    });
    return result;
}