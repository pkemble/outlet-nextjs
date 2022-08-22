import React from 'react'
import prisma from '../../prisma.d.ts';

const PostsByNotebook = () => {
    return (
        <>
            <div>PostsByNotebook</div>
        </>
    )
}

export default PostsByNotebook;

export async function getServerSideProps() {
    const notebooks = await prisma.notebooks.findMany({
        
    });
    return {
        props: {
            notebooks: notebooks,
        },
    };
}