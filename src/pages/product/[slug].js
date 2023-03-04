import { useRouter } from 'next/router';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { BiMessageDots } from 'react-icons/bi';


const Product = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <>
            <section class="body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font tracking-widest">BRAND NAME</h2>
                            <h1 class="text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                            <div class="flex mb-4">
                                <span class="flex items-center">

                                    <AiFillStar className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"></AiFillStar>
                                    <AiFillStar className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"></AiFillStar>
                                    <AiFillStar className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"></AiFillStar>
                                    <AiFillStar className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"></AiFillStar>
                                    <AiFillStar className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"></AiFillStar>

                                    <span class="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-3">
                                    <a className='cursor-pointer'>
                                        <BsFacebook className="w-5 h-5 text-blue-500"></BsFacebook>
                                    </a>
                                    <a className='cursor-pointer'>
                                        <BsTwitter className="w-5 h-5 text-blue-500"></BsTwitter>
                                    </a>
                                    <a className='cursor-pointer'>
                                        <BiMessageDots className="w-5 h-5 text-blue-500"></BiMessageDots>
                                    </a>
                                </span>
                            </div>
                            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div class="flex">
                                    <span class="mr-3">Color</span>
                                    <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div class="flex ml-6 items-center">
                                    <span class="mr-3">Size</span>
                                    <div class="relative">
                                        <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl ">$58.00</span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to cart</button>
                                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;