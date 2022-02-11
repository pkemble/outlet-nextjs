import { React, useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { PostForm } from '.';
import PostHeader from './PostHeader'

const PostCard = ({ post, notebooks, onPostFormVisible }) => {

    const [editPost, setEditPost] = useState(false);

    useEffect(() => {
        console.log("set edit post to false")
        setEditPost(false);
    }, [post])


    function handleEditPost() {
        setEditPost(true);
    }

    function onPostFormVisible(e, s) {
        handlePostFormVisible(e, s);
    }

    function handlePostFormVisible(e, s) {
        setEditPost(s);
    }

    return (
        <>
            {!editPost ?
                <div className='clear-both bg-white border shadow-lg rounded-lg p-2 lg:p-8 pb-12 mb-8'>
                    <div className='grid grid-cols-9'>
                        <div className='col-span-8 text-xl mb-2 font-bold'>
                            <PostHeader post={post} />
                        </div>
                        <button onClick={handleEditPost} className='col-span-1 mx-auto mr-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {ReactHtmlParser(post.content)}
                </div> :
                <div className='clear-both bg-white border shadow-lg rounded-lg p-2 lg:p-8 pb-12 mb-8'>
                    <PostForm key={post.id} notebooks={notebooks} onPostFormVisible={handlePostFormVisible} actionText={"Edit Post:"} existingPost={post} />
                </div>
            }
        </>
    );
};

export default PostCard;

