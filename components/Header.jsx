import React from 'react';
import Link from 'next/link';
import { PostForm } from '.';

const Header = () => {

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className='md:float-left block'>
                    <Link href={"/"}>
                        <span className='cursor-pointer font-bold text-4xl'>
                            Outlet
                        </span>
                    </Link>
                </div>
                <div className='md:float-left contents'>
                    <div className='md:float-right'>
                        {/* <Link href={createPost()} href='#'>
                            New Post
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
