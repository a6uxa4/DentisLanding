import { PersonalCard } from "@/components/personal/PersonalCard";
import { PERSONALS } from "@/utils/constants/personal.constant";
import React from "react";

export const PersonalPage = () => {
  return (
    <div className="w-full py-5">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono">Наши доктора</h1>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-5 mt-[70px]">
        {PERSONALS.map((item) => (
          <PersonalCard key={item.id} personal={item} />
        ))}
      </div>
    </div>
  );
};
