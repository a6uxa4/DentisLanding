import { PersonalCard } from "@/components/personal/PersonalCard";
import { PERSONALS } from "@/utils/constants/personal.constant";
import React from "react";

export const PersonalPage = () => {
  return (
    <div className="w-full mt-[50px]">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono">Наши доктора</h1>
      </div>
      <div className="w-full flex flex-wrap gap-5 mt-[100px]">
        {PERSONALS.map((item) => (
          <PersonalCard key={item.id} personal={item} />
        ))}
      </div>
    </div>
  );
};
