import React from "react";
import Headings from "./Headings";
import Card from "./Card";
import Button from "./Button";


function Workshop() {
    return(
      <div id="workshop" className="max-w-[1640px] mx-auto p-4 py-16">
        <Headings title='Workshop' />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 object-contain gap-6 px-5 py-12">
            <Card image="./hall.jpg" title="Introduction to WebDev" />
            <Card image="./building1.jpg" title="Getting Started" />
            <Card image="./building4.jpg" title="React and React Hooks" />
            <Card image="./building5.jpg" title="Deployment and Hosting" />
        </div>
      </div>
    )
}

export default Workshop;