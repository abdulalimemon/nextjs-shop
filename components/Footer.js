import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <section className="py-10 sm:pt-16 lg:pt-24 bg-acent">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-5 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <h2 className="text-2xl font-semibold ">Next Shop</h2>
                        <p className="text-base leading-relaxed  mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                        <ul className="flex items-center space-x-5 mt-9">
                            <li>
                                <a className=' hover:text-[#36D399] hover:dark:text-[#36D399]'>
                                    <BsFacebook className='w-7 h-7'></BsFacebook>
                                </a>
                            </li>
                            <li>
                                <a className=' hover:text-[#36D399] hover:dark:text-[#36D399]'>
                                    <BsInstagram className='w-7 h-7'></BsInstagram>
                                </a>
                            </li>
                            <li>
                                <a className=' hover:text-[#36D399] hover:dark:text-[#36D399]'>
                                    <BsTwitter className='w-7 h-7'></BsTwitter>
                                </a>
                            </li>
                            <li>
                                <a className=' hover:text-[#36D399] hover:dark:text-[#36D399]'>
                                    <BsYoutube className='w-7 h-7'></BsYoutube>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-bold tracking-widest  uppercase">Company</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a to="/about" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> About </a>
                            </li>
                            <li>
                                <a to="/contact" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Contact </a>
                            </li>
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Career </a>
                            </li>
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Works </a>
                            </li>
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Features </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-bold tracking-widest  uppercase">Help</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Customer Support </a>
                            </li>
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Delivery Details </a>
                            </li>
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Terms & Conditions </a>
                            </li>
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Privacy Policy </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-bold tracking-widest  uppercase">Help</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Customer Support </a>
                            </li>
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Delivery Details </a>
                            </li>
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Terms & Conditions </a>
                            </li>
                            <li>
                                <a to="/" className="flex text-base  transition-all duration-200 font-medium hover:text-[#36D399] hover:dark:text-[#36D399]"> Privacy Policy </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-600" />

                <p className="text-md text-center text font-semibold mb-12 lg:mb-0">© Copyright {year}, All Rights Reserved by Next Shop.</p>
            </div>
        </section>
    );
};

export default Footer;