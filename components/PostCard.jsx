import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PostHeader from './PostHeader'
import moment from 'moment';

const PostCard = ({ props }) => {
    return (
        <div className='clear-both bg-white border shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <PostHeader props={props} />
            {ReactHtmlParser(props.content)}
        </div>
    );
};

export default PostCard;

