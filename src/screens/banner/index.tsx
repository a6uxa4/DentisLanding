import React from "react";
const videoSrc = require("../../assets/video/EsteticVideo.mp4").default;

export const BannerPage = () => {
  return (
    <div className="h-[700px] max-h-[700px] relative">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover bg-[rgb(0,0,0,.5)]"
      />
    </div>
  );
};
