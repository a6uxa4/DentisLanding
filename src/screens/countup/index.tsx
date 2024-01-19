"use client";

import { COUNT_UP_DATA } from "@/utils/constants/countup.constant";

export const CountUpPage = () => {
  return (
    <div className="w-[100wv] bg-[#00d6d4] relative flex justify-center items-start py-10 bg-gold-400 sm:py-5 scroll-mt-24">
      <div className="w-full flex flex-wrap sm:gap-10 items-center justify-center gap-5">
        {COUNT_UP_DATA.map((item) => (
          <div
            key={item.id}
            className="w-[300px] flex flex-col items-center justify-center"
          >
            <h1 className="text-[40px] text-white sm:text-[30px]">
              {item.count}
            </h1>
            <span className="text-[25px] text-white sm:text-[15px]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
