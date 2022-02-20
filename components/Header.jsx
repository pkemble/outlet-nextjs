import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();

    if (session && session.user && session.user.email === "pkemble@gmail.com") {
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
                            <Link href={"/notebooks/notebook-manager"} >
                                <a className='m-2'>Manage Notebooks</a>
                            </Link>
                            <button className='m-2' onClick={() => signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    };
};

export default Header;
