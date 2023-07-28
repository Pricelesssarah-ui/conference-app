import React from "react";
import Headings from "./Headings";
import Card from "./Card";


function Workshop() {
    return(
      <div id="workshop" className="max-w-[1640px] mx-auto p-4 py-16">
        <Headings title='Workshop' />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-12">
            <Card image="./hall.jpg" title="Daniel Reo" />
            <Card image="./building1.jpg" title="Donald Zain" />
            <Card image="./building2.jpg" title="Alex Emen" />
            <Card image="./building3.jpg" title="Victoria Black" />
            <Card image="./building4.jpg" title="Peace Jacobs" />
            <Card image="./building5.jpg" title="Roy Neo" />
        </div>
      </div>
    )
}

export default Workshop;