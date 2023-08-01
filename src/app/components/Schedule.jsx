import React from "react";
import Headings from "./Headings";


function Schedule() {
    return(
        <div id="workshop" className="max-w-[1640px] mx-auto p-4 py-16 bg-yellow-700 text-white">
            <Headings title="Schedule" />

            <div className="text-center">
                <p className="text-bold">Date: August 3rd, 2023</p>
                <p className="text-bold">Time: 7:30AM to 4:00PM</p>
                <p className="text-bold">Location: ACE Hotel</p>
            </div>

            <div className="rounded-xl relative group flex flex-col items-center mt-8 duration-300">
                <div className="max-h-[300px] md:max-h-[300px] lg:w-[50%] md:w-[50%] sm:w-[80%] p-5 mb-3 hover:scale-105 text-white bg-white/10 rounded-xl">
                    <p>Time: 8:00AM</p>
                    <h1 className="text-1xl font-bold">Breakfast and Registration for Attendees</h1>
                </div>

                <div className="max-h-[300px] md:max-h-[300px] lg:w-[50%] md:w-[50%] sm:w-[80%] p-5 mb-3 hover:scale-105 text-white bg-white/20 rounded-xl">
                    <p>Time: 11:15AM</p>
                    <h1 className="text-1xl font-bold">Settle Inn community roadmap 2023</h1>
                </div>

                <div className="max-h-[300px] md:max-h-[300px] lg:w-[50%] md:w-[50%] sm:w-[80%] p-5 mb-3 hover:scale-105 text-white bg-white/10 rounded-xl">
                    <p>Time: 1:30PM</p>
                    <h1 className="text-1xl font-bold">Lighting Talks: Business and Skill acquisition</h1>
                </div>

                <div className="max-h-[300px] md:max-h-[300px] lg:w-[50%] md:w-[50%] sm:w-[80%] p-5 hover:scale-105 text-white bg-white/20 rounded-xl">
                    <p>Time: 3:30PM</p>
                    <h1 className="text-1xl font-bold">10 things about Tech everyone should know!</h1>
                </div>
            </div>

        </div>
    )
}

export default Schedule;