import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

const schedules = [
    {
        names: "Breakfast and Registration",
        desciption: "A cup of cooffe will keep you warm." ,
        image: "https://i.pinimg.com/564x/e0/a8/67/e0a867c0e2b324cf9ad15ee3530404ce.jpg",
        time: "8:00am",
        btnText: "",
    },

    {
        names: "Render when? Render where? Render why? Render what?",
        desciption: "The way we choose to populate and deliver the pages of our sites and applications can have profound effects on performance, accessibility, discoverability, and complexity. And there is a seemingly endless number of options available." ,
        image: "https://i.pinimg.com/564x/ce/35/46/ce35461299be0841ceddb2e2b6e55393.jpg",
        time: "9:40am",
        btnText: "",
    },
    {
        names: "React to the Edge",
        desciption: "Learn how to build a React application deployed to the edge to bring a blazing fast experience to your end users." ,
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "11:05am",
        btnText: "",
    },
    {
        names: "Conference Reception at the Howling Wolf with Live Music!",
        desciption: "The End! The End! The End!!!" ,
        image: "https://images.pexels.com/photos/6801867/pexels-photo-6801867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "2:00pm",
        btnText: "",
    },
]


function ScheduleSlider() {
    return(
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
            700: {
                slidesPerView: 1,
            }
        }}
        className="scheduleSlider min-h-[660px]"
        >
        {schedules.map((schedule, index) => {
                return(
                    <>
                        <SwiperSlide className="bg-yellow-200 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10" key={index}>
                            <div className="flex flex-col gap-y-5 md:flex-row md:gax16">
                                <Image src={schedule.image} height={900} width={1300} />

                                <div className="flex flex-col gap-y-5">
                                    <div className="text-2xl font-meduim flex gap-x-2 items-center">
                                        {schedule.names}
                                        <div className="h-[3px] w-[40px] bg-yellow-500 rounded"></div>
                                        <div>{schedule.desciption}</div>    
                                    </div>
                            
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                )
            })}
            
        </Swiper>
    )
}

export default ScheduleSlider;