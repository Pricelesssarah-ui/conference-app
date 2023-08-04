import React from "react";
import Headings from "./Headings";
import Card from "./Card";
import Button from "./Button";


function Speakers() {
    return(
        <div id="speakers" className="max-w-[1640px] mx-auto p-4 py-16">
            <Headings title="Speakers" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 py-12">
                <Card image="./speaker1.jpg" title="Alex Emen" />
                <Card image="./speaker2.jpg" title="Timothy Black" />
                <Card image="./speaker3.jpg" title="Peace Jacobs" />
                <Card image="./speaker4.jpg" title="Daniel Reo" />
                <Card image="./speaker5.jpg" title="Gab Abel" />
                <Card image="./speaker6.jpg" title="Gary Bush" />
                <Card image="./speaker7.jpg" title="Vivian Peters" />
                <Card image="./speaker8.jpg" title="Royin Neo" />
            </div>

        
        </div>
    )
}

export default Speakers;