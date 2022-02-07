import Link from 'next/link';
import React from 'react';

const NotebookList = ({ props }) => {
   
    return (
        <div className='bg-white shadow-lg border rounded-lg p-0 lg:p-8 pb-12 mb-8 text-center'>
            <span className='border-b pb-4'>Notebooks:</span>
            {props.map(notebook => (
                <div key={ notebook.id } className='font-bold border-b pb-4 pt-4'>
                    <Link href={`/notebooks/${notebook.id}`}>
                        {notebook.title}
                    </Link>
                </div>
            ))}
            <div className='font-bold border-b pb-4 pt-4'>
                <Link href="/">
                    All Notebooks
                </Link>
            </div>
            <div className='color-grey pb-4 pt-4'>
                <Link href={'/notebooks/'}>
                    Edit Notebooks
                </Link>
            </div>
        </div>
    );
};

export default NotebookList;
