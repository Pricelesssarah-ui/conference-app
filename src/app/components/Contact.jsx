import React from "react";
import Headings from "./Headings";
import Button from "./Button";


function Contact() {
    return(
        <div id="contact" className="w-[80%] border border-black-1000 mx-auto py-10 px-3">
            <Headings title='Contact' />
            
            <form action="#" className="lg:flex flex-row sm:flex-block justify-evenly items-center">
                <div className="flex flex-col">
                    <label>Your name:</label>
                    <input type="text" className="border border-black mb-5 lg:w-[120%]" />

                    <label>Your email:</label>
                    <input type="text" className="border border-black  lg:w-[120%]" />
                </div>  

                <div className="flex flex-col">
                    <label>Your Phone</label>
                    <input type="number" className="border border-black mb-5 lg:w-[120%]" />

                    <label>Date</label>
                    <input type="date" className="border border-black lg:w-[120%]" />
                </div>
            </form>

            <div className="mx-auto text-center mt-10">
                <textarea name="message" id="#" cols="50" rows="10"placeholder="message..." className="border border-black mb-5"></textarea>
                <br />
                <Button text="Send Message" />
            </div>
        </div>
    )
}

export default Contact;