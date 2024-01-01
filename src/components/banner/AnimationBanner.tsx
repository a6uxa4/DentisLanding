import animationData from "../../assets/video/BannerAnimation.json";
import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { LottieRefCurrentProps } from "lottie-react";

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAnimation = () => {
  const lottieContainer = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      lottieContainer.current?.goToAndPlay(45, true);
    }
  }, []);

  return (
    <DynamicLottie
      className="w-full h-full"
      animationData={animationData}
      lottieRef={lottieContainer}
    />
  );
};

export default LottieAnimation;
