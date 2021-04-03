import React from "react";
import WorkCard from "../components/WorkCard";
/*import { Account_Data } from "../data/details";*/

function HowitWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-md-12">
               <div className="main-heading">
                    <p>Working Process</p>
                    <h2>How It <span>Works</span></h2>
                </div>
          </div>
        </div>
        <div className="row">
          
              {/*{Account_Data.map((data,index) => {
                const { icon, heading, description } = data;
                return (
                  <WorkCard
                  key={index}
                  span={index+1}
                    icon={icon}
                    heading={heading}
                    description={description}
                  />
                );
              })}*/}
           </div>
      </div>
    </section>
  );
}

export default HowitWorks;


