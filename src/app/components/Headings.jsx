import React from "react";


function Headings({title}) {
    return(
        <div className="flex gap-5 items-center justify-center">
            <div className="bg-yellow-500 w-[100px] h-[2px]"></div>
            <h1 className="text-black-600  uppercase md:text-2xl lg:text-2xl">{title}</h1>
            <div className="bg-yellow-500 w-[100px] h-[2px]"></div>
        </div>
    )
}


export default Headings;