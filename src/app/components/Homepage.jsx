import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Homepage() {
    return(
        <div id='home' className='bg-[url("/hero.jpg")] h-screen bg-cover bg-no-repeat bg-center
            bg-fixed flex items-center relative'>
           <div className='absolute inset-0 bg-black/60'></div>
           <div className='container mx-auto px-4 z-10'>
                <div className='text-center text-white flex flex-col gap-[20px] gap-[40px]'>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider'>Settle Inn, Nigeria</h1>
                        <h1 className='text-2xl md:text-2xl lg:text-3xl py-1 font-semibold tracking-wider'><span className='text-yellow-500'>Lagos</span> State, Nigeria</h1>
                        <h1 className='text-2xl md:text-2xl lg:text-3xl tracking-wider'>1-3 Nov, 2023</h1>
                    </div>

                    <div className='mx-auto bg-yellow-600 h-[2px] w-[100px]'></div>

                    <div>
                        <Button link='#' text='Get your tickets 98 days to go...' />
                    </div>

                </div>

           </div>

            <div className='hidden absolute right-20 top-24 z-10 md:flex flex-col gap-5 items-center'>
                <div className='bg-yellow-600 w-[1.5px] h-[250px]'></div>
                <Link href="https://www.facebook.com/" target="_blank"><FaFacebook size={25} className='text-yellow-600 hover:-translate-x-1.5 duration-300' /></Link>
                <Link href="https://www.twitter.com/" target="_blank"><FaTwitter size={25} className='text-yellow-600 hover:-translate-x-1.5 duration-300' /></Link>
                <Link href="https://www.youtube.com/" target="_blank"><FaYoutube size={25} className='text-yellow-600 hover:-translate-x-1.5 duration-300' /></Link>
                <Link href="https://www.linkedin.com/" target="_blank"><FaLinkedin size={25} className='text-yellow-600 hover:-translate-x-1.5 duration-300' /></Link>
            </div>

        </div>
    )
}

export default Homepage;