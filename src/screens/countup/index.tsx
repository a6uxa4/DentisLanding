"use client";

import { COUNT_UP_DATA } from "@/utils/constants/countup.constant";

export const CountUpPage = () => {
  return (
    <div className="w-[100vw] bg-[#EEF9F9] relative flex justify-center items-start py-10 bg-gold-400 sm:py-5 scroll-mt-24">
      <div className="w-full flex items-center justify-center gap-2">
        {COUNT_UP_DATA.map((item) => (
          <div key={item.name} className="w-[250px] bg-red-200">
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
