import Image from "next/image";
import React from "react";

export const PersonalCard = ({ personal }: any) => {
  return (
    <div className="group w-[300px] h-[400px] relative flex flex-col items-start justify-between cursor-pointer m-2.5">
      <div className="w-full h-full flex items-end justify-center">
        <div className="w-[250px] h-[120px] bg-[#EEF9F9] group-hover:bg-[#00d6d4] duration-500 rounded-xl absolute z-[2]"></div>
        <Image src={personal.photo} alt="personal" className="z-[9] absolute" />
      </div>
      <div className="w-full h-full flex flex-col items-center mt-2">
        <div className="text-[16px] font-medium">{personal.firstName}</div>
        <div className="text-[16px] font-medium">{personal.lastName}</div>
        <div className="text-[#00D6D6] mt-1">{personal.specialization}</div>
      </div>
    </div>
  );
};
