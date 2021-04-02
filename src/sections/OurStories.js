import React from "react";
import OurStoriesCard from "../components/OurStoriesCard";
import { MData } from "../data/details"

const OurStories = () => {
    return (
        <section className="testimonial" id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="main-heading">
                        <p>What Say Our Client</p>
                        <h2>Our Success <span>Stories</span></h2>
                    </div>
                </div>
                <div className="row">
                    <div id="client-testimonial-slider" className="owl-carousel">
                        <OurStoriesCard pic={MData[0].pic} name={MData[0].name}/>
                        <OurStoriesCard pic={MData[1].pic} name={MData[1].name}/>
                        <OurStoriesCard pic={MData[2].pic} name={MData[2].name}/>
                        <OurStoriesCard pic={MData[3].pic} name={MData[3].name}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurStories