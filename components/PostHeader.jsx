import moment from 'moment';
import React from 'react';

const PostHeader = ({ props }) => {

    moment.locale('en');
    var headerString = moment(props.created_at).format('ll');

    if (props.notebooks !== null) {
        headerString += ' : ' + props.notebooks['title'];
    }
    if (props.title !== '') {
        headerString += ' : ' + props.title + (props.notebook !== null ? '' : ' : ' + props.notebook['title']);
    }

    return (
        <div className='grid grid-cols-9'>
            <div className='col-span-8 text-xl mb-2 font-bold'>
                {headerString}
            </div>
            <div className='col-span-1 mx-auto mr-0'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );
};

export default PostHeader;
