import React from "react";
import Headings from "./Headings";


function About() {
    return(
        <div className="max-w-[1640px] bg-yellow-700 mx-auto p-4 py-16 text-white">
            <Headings title='About' />

            <p className="mx-auto text-center max-w-[700px]">
                A Community Event organised by the Community, our Javascript 
                Conference evolved from the popularity and success of a monthly meet-up put together 
                by 2 different JavaScript groups in Lagos, including, Lagos JS Community, and Lagos Node User Group.
            </p>

            <p className="mx-auto text-center max-w-[700px] mt-10">
                The main organiser of the event is Sarah Kehinde 
                (email pricelesssarah3@gmail.com, telephone +2348162974435).
            </p>

            <p className="mx-auto text-center max-w-[700px] mt-10 sm:text-1xl">
                The conference is for developers, solution architects, and other tech individuals 
                aiming to stay in touch with the industry. Our aim is for individuals to be updated on 
                innovative changes around the industry and JS as an entity. 
            </p>
        </div>
    )
}

export default About;