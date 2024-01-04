"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/utils/constants/header.constant";
import clsx from "clsx";
import { Button } from "@nextui-org/react";
import { useActiveSectionContext } from "@/providers/ActiveSection";
import Link from "next/link";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [scrolled, setScrolled] = useState<boolean>(false);

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
      className={`fixed z-20 w-full h-[70px] ${
        scrolled ? "bg-[#00d6d4]" : "bg-transparent"
      } transition duration-300 ease-in-out`}
    >
      <div className="w-full h-full max-w-[1440px] m-auto px-10 flex relative">
        <div className="w-full h-full flex items-center justify-between">
          <h1
            className={`text-[30px] font-bold ${
              !scrolled ? "text-[#00d6d4]" : "text-white"
            } transition duration-300 ease-in-out`}
          >
            ESTETIC • CLINIC
          </h1>
          <div className="flex items-center gap-5">
            {NAV_LINKS.slice(1).map((nav) => (
              <Link
                href={nav.hash}
                onClick={() => {
                  setActiveSection(nav.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "px-3.5 py-1.5 text-base font-normal skew-x-[-10deg] rounded-lg cursor-pointer transition",
                  {
                    "hover:bg-white hover:text-[#00d6d4] text-white font-medium":
                      scrolled,
                  },
                  {
                    "bg-[#eef9f9] hover:bg-[#00d6d4] hover:text-white":
                      !scrolled,
                  },
                  {
                    "bg-white !text-[#00d6d4]": activeSection === nav.name,
                  }
                )}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="w-fit h-full flex items-center justify-center">
            <Button
              className={clsx(
                "skew-x-[-10deg] bg-[#00d6d4] text-white font-semibold text-[16px]",
                {
                  "bg-white text-[#00d6d4]": scrolled,
                }
              )}
            >
              Записаться на прием
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
