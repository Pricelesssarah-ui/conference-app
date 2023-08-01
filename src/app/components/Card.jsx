import React from "react";
import Button from "./Button";


function Card({image, title, text}) {
    return(
        <div className="rounded-xl relative overflow-hidden group hover:scale-105 hover:shadow-md duration-300">
            <img src={image} alt="" className="max-h-[300px] md:max-h-[300px] w-full object-cover rounded-xl" />

            <div className="absolute w-full h-full bg-black/70 rounded-xl text-white z-10 flex flex-col items-center justify-center gap-5
                group-hover:bottom-0 opacity-0 group-hover:opacity-100 -bottom-20 transition-all duration-300">
                <h3 className="font-bold text-1xl md:text-1xl lg:text-2xl mt-6">{title}</h3>

                <Button link="#" text="See more..." />
            </div>
        </div>
    )
}

export default Card;