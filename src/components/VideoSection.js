import React from "react";

const VideoSection = ({ best, h1, h2 }) => {
  return (
      <section className="video-sec dark" id="video" style="background-image:url(assets/img/banner-10.jpg);" >
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <p>Best For Your Projects</p>
              <h2>
                Watch Our <span>video</span>
              </h2>
            </div>
          </div>
          <div className="video-part">
            <a href="#" data-toggle="modal" data-target="#my-video" className="video-btn">
              <i className="fa fa-play"> </i>
            </a>
          </div>
        </div>
      </section>
  );
};
export default VideoSection;
