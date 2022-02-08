import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { PostForm } from '.';
import PostHeader from './PostHeader'

const PostCard = ({ post, notebooks }) => {

    const [editPost, setEditPost] = useState(false);

    return (
        <>
            {!editPost ?
                <div className='clear-both bg-white border shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
                    <PostHeader props={post} />
                    {ReactHtmlParser(post.content)}
                </div> :
                <div className='clear-both bg-white border shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
                    <PostForm props={post, notebooks} />
                </div>
            }
        </>
    );
};

export default PostCard;

