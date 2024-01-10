"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/utils/constants/header.constant";
import clsx from "clsx";
import { Button } from "@nextui-org/react";
import { useActiveSectionContext } from "@/providers/ActiveSection";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();

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
          <div className="flex items-center gap-5 xl:hidden">
            {NAV_LINKS.slice(1, 6).map((nav, index) => (
              <Link
                key={index}
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
          <div className="w-fit h-full flex items-center justify-center md:hidden">
            <Button
              href="#appointments"
              onClick={() => {
                setActiveSection("APPOINTMENTS");
                setTimeOfLastClick(Date.now());
                route.push("#appointments");
              }}
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
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="w-7 h-7 flex-col justify-around cursor-pointer relative hidden xl:flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={clsx("w-full h-1 bg-[#00d6d4] rounded", {
                "rotate-45 absolute": isOpen,
              })}
            />
            <div
              className={clsx("w-full h-1 bg-[#00d6d4] rounded", {
                hidden: isOpen,
              })}
            />
            <div
              className={clsx("w-full h-1 bg-[#00d6d4] rounded", {
                "rotate-[-45deg] absolute": isOpen,
              })}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};
