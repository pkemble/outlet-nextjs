import Link from 'next/link';
import React from 'react';

const NotebookList = ({ props }) => {
   
    return (
        <div className='bg-white shadow-lg border rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            {props.map((notebook, index) => (
                <div className='font-bold'>
                    <Link key={ index } href={`/posts/${notebook.id}`}>
                        {notebook.title}
                    </Link>
                </div>
            ))}
            <div className='color-grey mt-8'>
                <Link href={'/notebooks/'}>
                    Edit Notebooks
                </Link>
            </div>
        </div>
    );
};

export default NotebookList;
