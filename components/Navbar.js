import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="bg-[#DDD4E6] shadow-md mb-1">
                <div className='navbar container mx-auto'>
                    <div className="navbar-start">
                        <Link href='/' className='btn btn-ghost normal-case text-xl'>Next Shop</Link>
                    </div>
                    <div className="hidden lg:flex navbar-end">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href='/about'>About Us</Link></li>
                            <li><Link href='/contact'>Contact Us</Link></li>
                            <li><Link href='/tshirt'>Product</Link></li>

                        </ul>
                    </div>
                    <div className='navbar-end lg:hidden'>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link href='/about'>About Us</Link></li>
                                <li><Link href='/contact'>Contact Us</Link></li>
                                <li><Link href='/tshirt'>Product</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;