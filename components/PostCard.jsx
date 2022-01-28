import React from 'react';

const PostCard = ({ props }) => {
    return (
        <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            {props.created_at} : {props.title}
            <div className='border rounded-lg p-5'>
                {props.rich_text.body}
            </div>
        </div>
    );
};

export default PostCard;

