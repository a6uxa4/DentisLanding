import React from "react";
import CustomSVG from "../UI/CustomSvg/CustomSvg";
import clsx from "clsx";

export const AdvantagesCard = ({ advantages }: any) => {
  return (
    <div className="group w-[200px] h-fit flex flex-col justify-around  gap-5 px-2 py-4 text-center items-center hover:bg-white rounded duration-500 cursor-pointer">
      <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
        <CustomSVG
          paths={advantages.icon.paths}
          width={advantages.icon.width}
          height={advantages.icon.height}
          viewBox={advantages.icon.viewBox}
          className={clsx("fill-[#00D6D6]")}
        />
      </div>
      <div>{advantages.name}</div>
    </div>
  );
};
