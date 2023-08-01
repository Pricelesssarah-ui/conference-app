import Link from "next/link";
import React from "react";
import { FaHome, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


function Footer() {
    return(
        <div className="lg:flex md:flex sm:block p-4 gap-5 items-center justify-around bg-black text-white w-[100%] md:h-[250px] lg:h-[200px]">
            <div className="sm:mr-0 mt-3 lg:mr-10 flex flex-col">
                <div className="flex gap-1 mb-3 items-center text-2xl font-bold">
                    <span className='italic'>Settle</span>
                    <FaHome />
                    <span className='italic text-yellow-400'>Inn</span>
                </div>

                <Link href="https://www.gmail.com/" className='hover:text-yellow-400' target="_blank">pricelesssarah3@gmail.com</Link>
                <p>+2348162974435</p>
                <p>Lagos State,<br /> Nigeria.</p>
            </div>
            
            <div className="sm:mr-0 mt-3 lg:mr-10 flex flex-col">
                <h1 className="text-2xl mb-3 text-yellow-400 font-bold">Contact</h1>
                <p>FAQS</p>
                <p>Locations</p>
                <div className="flex flex-row py-4">
                    <Link href="https://www.facebook.com/" target="_blank"><FaFacebook size={25} className='text-yellow-500 hover:-translate-y-1.5 duration-300' /></Link>
                    <Link href="https://www.twitter.com/" target="_blank"><FaTwitter size={25} className='text-yellow-500 hover:-translate-y-1.5 duration-300 mx-2' /></Link>
                    <Link href="https://www.youtube.com/" target="_blank"><FaYoutube size={25} className='text-yellow-500 hover:-translate-y-1.5 duration-300 mr-2' /></Link>
                    <Link href="https://www.linkedin.com/" target="_blank"><FaLinkedin size={25} className='text-yellow-500 hover:-translate-y-1.5 duration-300' /></Link>
            </div>

            </div>

            <div className="my-5 flex flex-col">
                <h1 className="text-2xl mb-3 text-yellow-400 font-bold">Useful Links</h1>
                <Link href="/" className='hover:text-yellow-400 ' target="_blank">Code of Conduct</Link>
                <Link href="/" className='hover:text-yellow-400' target="_blank">Privacy Policy</Link>
                <Link href="/" className='hover:text-yellow-400' target="_blank">Terms and Conditions</Link>
                <Link href="/" className='hover:text-yellow-400' target="_blank">Workshops</Link>
            </div>

            <div className=" flex flex-col">
                <h1 className="text-2xl mb-3 text-yellow-400 font-bold">Address</h1>
                <p className="w-[200px]">13 Ondo Street Irawo, Ikorodu Road, <br /> Lagos State, <br /> Nigeria.</p>
            </div>
        </div>
    )
}

export default Footer;