import moment from 'moment';
import React from 'react';
import { Moment } from 'moment';

const PostHeader = ({ props }) => {

    
    moment.locale('en');
    var headerString = moment(props.created_at).format('ll');
    console.log(props.notebooks);

    if (props.notebooks !== null) {
        headerString += ' : ' + props.notebooks['title'];         
    } 
    if (props.title !== '') {
        headerString += ' : ' + props.title + (props.notebook !== null ? '' : ' : ' + props.notebook['title']);
    }

    return (
        <div className='text-xl mb-2 font-bold'>
            {headerString}    
        </div>
    );
};

export default PostHeader;
