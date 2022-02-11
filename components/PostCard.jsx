import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { PostForm } from '.';
import PostHeader from './PostHeader'

const PostCard = ({ post, notebooks }) => {

    const [editPost, setEditPost] = useState(false);

    return (
        <>
            {!editPost ?
                <div className='clear-both bg-white border shadow-lg rounded-lg p-2 lg:p-8 pb-12 mb-8'>
                    <PostHeader post={post} />
                    {ReactHtmlParser(post.content)}
                </div> :
                <div className='clear-both bg-white border shadow-lg rounded-lg p-2 lg:p-8 pb-12 mb-8'>
                    <PostForm notebooks={post, notebooks} />
                </div>
            }
        </>
    );
};

export default PostCard;

