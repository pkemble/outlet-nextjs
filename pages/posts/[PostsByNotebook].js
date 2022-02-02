import React from "react";
import { PostCard, NotebookList } from "../../components";

import { getNotebooks, getPostsByNotebook } from '../api';

const PostsByNotebook = ({ posts, notebooks }) => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {posts.map((post, index) => (
                        <PostCard key={index} props={post} />
                    ))}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className='lg:sticky relative top-8'>
                        <NotebookList props={notebooks} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostsByNotebook;

export async function getServerSideProps({ params }) {
    const serPostsByNotebook = JSON.stringify(
        await getPostsByNotebook(params.PostsByNotebook), (_key, value) => typeof value === 'bigint' ? value.toString() : value)
    const serNotebooks = JSON.stringify(
        await getNotebooks(params.PostsByNotebook), (_key, value) => typeof value === 'bigint' ? value.toString() : value)
    
    return {
        props: {
            posts: JSON.parse(serPostsByNotebook),
            notebooks: JSON.parse(serNotebooks)
        }
    };
}