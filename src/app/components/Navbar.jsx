'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaIcicles } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return(
        <div className=' fixed bg-white top-0 w-[100%] z-20 shadow-md'>
            <div className=' container mx-auto flex justify-between items-center px-4 py-4 '>
                <div className='flex gap-1 items-center text-xl md:text-2xl font-bold'>
                    <span className='italic'>Settle</span>
                    <FaHome />
                    <span className='italic text-yellow-400'>Inn</span>
                </div>
                
                <div className='hidden md:flex gap-10 tracking-wider text-gray-600'>
                    <Link href="/" className='hover:text-yellow-400'>Home</Link>
                    <Link href="#speakers" className='hover:text-yellow-400'>Speakers</Link>
                    <Link href="#schedule" className='hover:text-yellow-400'>Schedule</Link>
                    <Link href="#workshop" className='hover:text-yellow-400'>Workshops</Link>
                </div>

                <div>
                    <button href="#contact" className='hidden md:block border border-black-900 px-4 py-1 rounded-md text-black-400 
                        hover:bg-yellow-400 hover:text-white'>Contact Us
                    </button>
                </div>
                {toggle ? (
                    <AiOutlineClose onClick={() => setToggle(!toggle)} size={30} className='md:hidden block' />
                ) : (
                <FiMenu onClick={() => setToggle(!toggle)} size={30} className='md:hidden' />
                )}
            </div>


            {/*Responsive Menu*/}

            <div className={`duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/80 text-white top-[60px] ${toggle ? `left-[0]` : `left-[-100%]`}`}>
                <Link href="/" className='hover:text-green-700 p-5'>Home</Link>
                <Link href="/" className='hover:text-green-700 p-5'>Workshops</Link>
                <Link href="/" className='hover:text-green-700 p-5'>Location</Link>
                <Link href="/" className='hover:text-green-700 p-5'>Speakers</Link>
                <Link href="/" className='hover:text-green-700 p-5'>SCHEDULE</Link>


                <div className='flex flex-col gap-5 items-center mt-40'>
                <div className='bg-yellow-600 w-[250px] h-[1px]'></div>
                <div className='flex gap-10'>
                    <Link href="https://www.facebook.com/" target="_blank"><FaFacebook size={25} className='text-yellow-600 hover:-translate-y-1.5 duration-300' /></Link>
                    <Link href="https://www.twitter.com/" target="_blank"><FaTwitter size={25} className='text-yellow-600 hover:-translate-y-1.5 duration-300' /></Link>
                    <Link href="https://www.youtube.com/" target="_blank"><FaYoutube size={25} className='text-yellow-600 hover:-translate-y-1.5 duration-300' /></Link>
                    <Link href="https://www.linkedin.com/" target="_blank"><FaLinkedin size={25} className='text-yellow-600 hover:-translate-y-1.5 duration-300' /></Link>
                </div>
                
            </div>

            </div>
        </div>
    )
}

export default Navbar;