import React from "react";
import Headings from "./Headings";
import Button from "./Button";


function Contact() {
    return(
        <div id="contact" className="w-[80%] border border-black-1000 mx-auto py-10 px-3">
            <Headings title='Contact' />
            
            <form action="#" className="lg:flex flex-row sm:flex-block justify-center items-center">
                <div className="flex flex-col">
                    <>
                        <label>Your name:</label>
                        <input type="text" required className="border border-black mb-5 p-1.5 rounded-md lg:w-[60vw]" />
                    </>
                    <>
                        <label>Your email:</label>
                        <input type="text" required className="border border-black mb-5 p-1.5 rounded-md lg:w-[60vw]" />
                    </>
                    <>
                        <label>Your Phone</label>
                        <input type="text" required className="border border-black mb-5 p-1.5 rounded-md lg:w-[60vw]" />
                    </>
                </div>  
            </form>

            <div className="mx-auto text-center mt-10">
                <textarea name="message" id="#" cols="23" rows="10"placeholder="message..." className="border border-black mb-5 p-5 lg:w-[78%] md:w-[100%] rounded-md"></textarea>
                <br />

                <button>
                    <a href="#contact" className='hidden md:block border bg-yellow-400 text-bold px-4 py-1 rounded-md text-black 
                    hover:bg-yellow-600 hover:border-none hover:text-black-bold' >Send Messsage
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Contact;