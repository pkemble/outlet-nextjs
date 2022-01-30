import Link from 'next/link';
import React from 'react';

const NotebookList = ({ props }) => {
   
    return (
        <div className='bg-white shadow-lg border rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            {props.map((notebook, index) => (
                <Link key={ index } className='font-bold bg-red' href={'/'}>
                    {notebook.title}
                </Link>
            ))}
        </div>
    );
};

export default NotebookList;
