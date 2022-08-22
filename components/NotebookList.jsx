import Link from 'next/link';
import React from 'react';
import { DataContext, useOutletData } from '../context/DataContext';
import { getServerSideProps } from '../pages/notebooks/[notebook_id]';
// import prisma from '../prisma';

const NotebookList = ({ onPostFormVisible }) => {

    const { ...outletData } = useOutletData(DataContext);

    return (
        <div className='bg-white shadow-lg border rounded-lg p-0 lg:p-8 pb-12 mb-8 text-center'>
            <span className='border-b pb-4'>Notebooks:</span>
            {outletData.state.notebooks.map(notebook => (
                <div key={notebook.id} id={notebook.id}
                    onClick={(e) => {
                        outletData.updateOutletData(notebook.id);
                        onPostFormVisible(e, false);
                    }}
                    className='font-bold border-b pb-4 pt-4 cursor-pointer'>
                    {notebook.title}
                </div>
            ))}
                <div
                    onClick={(e) => {
                        outletData.updateOutletData();
                        onPostFormVisible(e, false);
                    }}
                    className='font-bold border-b pb-4 pt-4 cursor-pointer'>
                    All Notebooks
                </div>
                <div className='color-grey font-bold border-none pb-4 pt-4 cursor-pointer'>
                    <Link href={'/notebook-manager'} >
                        Edit Notebooks
                    </Link>
                </div>
        </div>
    );
};

export default NotebookList;

// export async function getServerSideProps() {
//     const notebooks = prisma.notebooks.findMany();
//     return notebooks;
// }
