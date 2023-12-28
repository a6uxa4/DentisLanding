import Marquee from "react-fast-marquee";
import Image from "next/image";

import Gis from "../../assets/icons/2gis-logo-brandlogos.net_d7eascbmu.svg";
import Yandex from "../../assets/icons/yandex-logo-C9C57IYR_brandlogos.net.svg";
import Google from "../../assets/icons/Google-OfwXGx0Sl_brandlogos.net.svg";
import MEdik from "../../assets/icons/logo-for-seo.jpg";
import Quotion from "../../assets/icons/icons8-цитата-слева-48.png";
import Rating from "../../assets/icons/icons8-звезда-48.png";
import Star from "../../assets/icons/icons8-звезда-48 (1).png";

import { REVIEWS, CalculateRating } from "@/utils/constants/feedback.constant";

const logos = [Gis, Yandex, Google, MEdik];

export const FeedbackPage = () => {
  return (
    <div className="w-[100vw] bg-[#EEF9F9] relative flex justify-center items-start py-10">
      <div className="flex flex-col gap-2">
        <div className="py-5 w-full flex items-center justify-center">
          <h1 className="text-[30px] font-bold font-mono">Наши отзывы</h1>
        </div>
        <div className="h-[400px] w-screen pl-[100px] flex  max-w-[1440px]">
          <Marquee speed={100} loop={0} pauseOnHover={true}>
            {REVIEWS.map((item, index) => (
              <div
                key={index}
                className="h-[350px] w-[650px] bg-white shadow-lg mx-10 rounded-xl relative cursor-pointer"
              >
                <Image
                  src={Quotion}
                  alt="quotations"
                  className="absolute left-[50px] top-[-28px]"
                />
                <div className="flex justify-between mx-[50px]">
                  <div className="flex items-center mt-6">
                    <div
                      style={{ backgroundColor: item.color }}
                      className={`rounded-full w-14 h-14  flex justify-center items-center`}
                    >
                      <p className="text-[18px] text-white font-extrabold tracking-widest">
                        {item.avatar}
                      </p>
                    </div>
                    <div className="ml-4 my-font">
                      <p className="text-[15px] text-gray-800 tracking-wider">
                        {item.FullName}
                      </p>
                      <p className="text-[13px] text-gray-600">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-fit mt-6">
                    {item.rating.map((item, index) => (
                      <Image
                        key={index}
                        src={CalculateRating(Rating, Star, item)}
                        alt="rating"
                        className="w-4 h-4"
                      />
                    ))}
                  </div>
                  <div className="w-32 h-16 mt-4 p-5">
                    <Image src={logos[item.number]} />
                  </div>
                </div>
                <p className=" h-[65%] flex items-center text-gray-700 text-[14px] px-[50px] mt-4 my-font tracking-wide overflow-clip">
                  {item.title}
                </p>
              </div>
            ))}
          </Marquee>
          <div className="w-[30%] h-[80%] mx-10 rounded-lg mt-12 grid grid-cols-2 gap-4 ">
            {logos.map((item, index) => (
              <div
                key={index}
                className="w-full h-32 shadow-md bg-white px-4 py-2 bg-center rounded-xl hover:scale-105 duration-250"
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
