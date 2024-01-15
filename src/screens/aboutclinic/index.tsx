"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

export const AboutClinicPage = () => {
  const { ref } = useSectionInView("О клиникe");
  return (
    <div id="abouts" ref={ref} className="w-full py-10 sm:py-5 scroll-mt-24">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          О клиникe
        </h1>
      </div>
      <div>pAGE</div>
    </div>
  );
};
