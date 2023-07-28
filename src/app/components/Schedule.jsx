"use client"
import Headings from "./Headings";
import ScheduleSlider from "./ScheduleSlider";


function Schedule() {
    return(
        <section id="schedule" className="bg-yellow-100 min-h-[600px] py-16">
            <div className="container mx-auto h-[680px]">
                <Headings title="Schedule" />
                <ScheduleSlider />
            </div>
        </section>
    )
}

export default Schedule;