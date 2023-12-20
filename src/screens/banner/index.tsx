import React from "react";
import videoSrc from "../../assets/video/EsteticVideo.mp4";

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
