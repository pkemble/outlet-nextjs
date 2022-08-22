import moment from 'moment';
import { React } from 'react';

const PostHeader = ({ post }) => {

    moment.locale('en');
    var headerString = moment(post.created_at).format('ll');

    if (post.notebooks !== null) {
        headerString += ' : ' + post.notebooks['title'];
    }
    if (post.title !== '') {
        headerString += ' : ' + post.title + (post.notebook !== null ? '' : ' : ' + post.notebook['title']);
    }

    return (
        <>
            {headerString}
        </>
    );
};

export default PostHeader;
