import CustomSVG from "@/components/UI/CustomSvg/CustomSvg";
import { HEADER_NAV } from "@/utils/constants/header.constant";
import clsx from "clsx";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [selectedHeader, setSelectedHeader] = useState<null | number>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-10 w-full h-[80px] ${
        scrolled ? "bg-[#00d6d4]" : "bg-transparent"
      } transition duration-300 ease-in-out`}
    >
      <div className="w-full h-full max-w-[1440px] m-auto px-4 flex">
        <div className="w-full h-full">
          <h1
            className={`text-[30px] font-bold ${
              !scrolled ? "text-[#00d6d4]" : "text-white"
            } transition duration-300 ease-in-out`}
          >
            ESTETIC
          </h1>
          <span
            className={`text-[16px] ${
              !scrolled ? "text-[#00d6d4]" : "text-white"
            } transition duration-300 ease-in-out`}
          >
            Стоматологическая клиника №1 в Бишкеке
          </span>
        </div>
        <div className="w-full h-full flex items-center justify-around">
          {HEADER_NAV.map((item) => (
            <div
              onMouseEnter={() => setSelectedHeader(item.id)}
              onMouseLeave={() => setSelectedHeader(null)}
              key={item.id}
              className={clsx(
                "flex gap-2 w-fit h-fit px-3 py-2 rounded-md cursor-pointer transition duration-300 ease-in-out",
                {
                  "fill-[#00d6d4] text-[#00d6d4] hover:bg-[#00d6d4] hover:text-white hover:fill-white":
                    !scrolled,
                },
                {
                  "fill-white text-white hover:bg-white hover:text-[#00d6d4] hover:fill-[#00d6d4]":
                    scrolled,
                }
              )}
            >
              <CustomSVG
                paths={item.icon.paths}
                width={item.icon.width}
                height={item.icon.height}
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
