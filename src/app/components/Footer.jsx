import Link from "next/link";
import React from "react";


function Footer() {
    return(
        <div className="lg:flex sm:block p-4 gap-5 items-center justify-around bg-black text-white w-[100%] md:h-[400px] lg:h-[200px]">
            <div className="sm:mr-0 mt-3 lg:mr-10 flex flex-col tracking-widest">
                <h1 className="text-2xl mb-3 text-yellow-400">Contact</h1>
                <Link href="https://www.twitter.com/" className='hover:text-yellow-400' target="_blank">Twitter: @PricelessFave</Link>
                <Link href="https://www.gmail.com/" className='hover:text-yellow-400' target="_blank">Email: pricelesssarah3@gmail.com</Link>
                <p>Lagos State, Nigeria.</p>
            </div>

            <div className="my-5 flex flex-col tracking-widest">
                <h1 className="text-2xl mb-3 text-yellow-400">Useful Links</h1>
                <Link href="https://www.twitter.com/" className='hover:text-yellow-400 ' target="_blank">Code of Conduct</Link>
                <Link href="https://www.gmail.com/" className='hover:text-yellow-400' target="_blank">Privacy Policy</Link>
                <Link href="https://www.gmail.com/" className='hover:text-yellow-400' target="_blank">Workshops</Link>
            </div>

            <div className=" flex flex-col tracking-widest">
                <h1 className="text-2xl mb-3 text-yellow-400">Address</h1>
                <p className="w-[200px]">13 Ondo Street Irawo, Ikorodu Road, Lagos State, Nigeria.</p>
            </div>
        </div>
    )
}

export default Footer;