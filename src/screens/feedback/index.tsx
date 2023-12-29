import Marquee from "react-fast-marquee";
import Image from "next/image";

import { REVIEWS, LOGOS } from "@/utils/constants/feedback.constant";
import { FeedbackCard } from "@/components/feedback/FeedbackCard";

export const FeedbackPage = () => {
  return (
    <div className="w-[100vw] bg-[#EEF9F9] relative flex justify-center items-start py-10 bg-gold-400">
      <div className="flex flex-col gap-2">
        <div className="py-5 w-full flex items-center justify-center">
          <h1 className="text-[30px] font-bold font-mono">Наши отзывы</h1>
        </div>
        <div className="h-[400px] w-full pl-[100px] flex max-w-[1440px]">
          <Marquee speed={100} loop={0} pauseOnHover={true}>
            {REVIEWS.map((item, index) => (
              <FeedbackCard key={index} feedback={item} />
            ))}
          </Marquee>
          <div className="w-[30%] h-[80%] mx-10 rounded-lg mt-12 grid grid-cols-2 gap-4 ">
            {LOGOS.map((item, index) => (
              <div
                key={index}
                className="w-full h-32 shadow-md bg-white px-4 py-2 bg-center rounded-xl hover:scale-105 duration-250 cursor-pointer"
              >
                <Image
                  src={item}
                  alt={`logo ${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
