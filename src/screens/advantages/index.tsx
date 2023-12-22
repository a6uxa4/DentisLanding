import { AdvantagesCard } from "@/components/advantages/AdvantagesCard";
import { ADVANTAGES } from "@/utils/constants/advantages.constant";
import React from "react";

export const AdvantagesPage = () => {
  return (
    <div className="w-[100vw] bg-[#EEF9F9] relative flex justify-center items-start py-10">
      <div className="flex flex-col gap-2">
        <div className="py-5 w-full flex items-center justify-center">
          <h1 className="text-[30px] font-bold font-mono">Наши Преимущества</h1>
        </div>
        <div className="flex gap-3">
          {ADVANTAGES.map((advantages) => (
            <AdvantagesCard key={advantages.id} advantages={advantages} />
          ))}
        </div>
      </div>
    </div>
  );
};
