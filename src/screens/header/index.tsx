"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/utils/constants/header.constant";
import clsx from "clsx";
import { Button } from "@nextui-org/react";
import { useActiveSectionContext } from "@/providers/ActiveSection";
import Link from "next/link";
import { motion } from "framer-motion";
import useWindowWidth from "@/hooks/useWindowWidth";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const wide = useWindowWidth();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

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

  const mainVariant = {
    moveLeft: {
      x: 0,
      y: 0,
    },
    moveRight:
      wide < 641
        ? {
            x: 200,
            y: 0,
          }
        : {
            x: 0,
            y: 0,
          },
  };

  const ButtonMain = {
    moveLeft: {
      x: 140,
      y: 0,
    },
    moveRight:
      wide < 641
        ? {
            x: 300,
            y: 0,
          }
        : {
            x: 0,
            y: 0,
          },
  };

  return (
    <header
      className={`fixed z-20 w-full h-[70px] ${
        scrolled ? "bg-[#00d6d4]" : "bg-transparent"
      } transition duration-300 ease-in-out`}
    >
      <div className="w-full h-full max-w-[1440px] m-auto px-10 flex relative sm:px-3">
        <div className="w-full h-full flex items-center justify-between">
          <h1
            className={`text-[30px] sm:text-[20px] font-bold ${
              !scrolled ? "text-[#00d6d4]" : "text-white"
            } transition duration-300 ease-in-out`}
          >
            ESTETIC • CLINIC
          </h1>
          <motion.div
            animate={open ? mainVariant.moveLeft : mainVariant.moveRight}
            transition={{ delay: open ? 0.1 : 0 }}
            className="flex items-center gap-5 sm:flex-col sm:justify-start sm:items-start sm:fixed sm:top-8 sm:right-32 sm:z-10"
          >
            {NAV_LINKS.slice(1).map((nav) => (
              <Link
                key={nav.hash}
                href={nav.hash}
                onClick={() => {
                  setActiveSection(nav.name);
                  setTimeOfLastClick(Date.now());
                  setOpen(false);
                }}
                className={clsx(
                  "px-3.5 py-1.5 text-base font-normal skew-x-[-10deg] rounded-lg cursor-pointer transition",
                  {
                    "hover:bg-white hover:text-[#00d6d4] text-white font-medium sm:bg-[#00d6d4] sm:text-white":
                      scrolled,
                  },
                  {
                    "bg-[#eef9f9] hover:bg-[#00d6d4] hover:text-white sm:bg-[#00d6d4] sm:text-white":
                      !scrolled,
                  },
                  {
                    "bg-white !text-[#00d6d4] sm:!text-white":
                      activeSection === nav.name,
                  },
                  {
                    "sm:hidden delay-500": !open,
                  }
                )}
              >
                {nav.name}
              </Link>
            ))}
          </motion.div>
          <div className="w-fit h-full flex items-center justify-center">
            <motion.div
              transition={{ delay: open ? 0.1 : 0 }}
              animate={
                open && wide < 641 ? ButtonMain.moveLeft : ButtonMain.moveRight
              }
              className="z-10"
            >
              <Button
                className={clsx(
                  "skew-x-[-10deg] bg-[#00d6d4] text-white font-semibold text-[16px] sm:fixed sm:right-20 sm:top-[310px] sm:z-10",
                  {
                    "bg-white text-[#00d6d4] sm:bg-[#00d6d4] sm:text-white  ":
                      scrolled,
                  },
                  {
                    "sm:hidden delay-150": !open,
                  }
                )}
              >
                Записаться на прием
              </Button>
            </motion.div>
          </div>
          <motion.div
            onClick={() => setOpen(!open)}
            className="hidden sm:block z-40 cursor-pointer"
          >
            <motion.div
              animate={{
                x: open ? 14.5 : 0,
                y: 1,
                scale: 1,
                rotate: open ? 45 : 0,
                width: open ? 20 : 28,
              }}
              className={`w-7 h-[3px]  ${
                open ? "bg-[#00d6d4]" : scrolled ? "bg-white" : "bg-[#00d6d4]"
              }`}
            ></motion.div>
            <motion.div
              animate={{
                x: 0,
                y: 0,
                rotate: 0,
              }}
              className={`w-7 h-[3px] my-1 ${
                open ? "bg-[#00d6d4]" : scrolled ? "bg-white" : "bg-[#00d6d4]"
              }`}
            ></motion.div>
            <motion.div
              animate={{
                x: open ? 14.5 : 0,
                y: -1,
                scale: 1,
                rotate: open ? -45 : 0,
                width: open ? 20 : 28,
              }}
              className={`w-7 h-[3px]  ${
                open ? "bg-[#00d6d4]" : scrolled ? "bg-white" : "bg-[#00d6d4]"
              }`}
            ></motion.div>
          </motion.div>
          <motion.div
            animate={{ width: open ? 300 : 0 }}
            className="fixed top-0 right-0 h-screen bg-[#eef9f9] hidden sm:block w-[80%] rounded-lg mt-1 mr-1 shadow-lg shadow-[#468a89b3]"
          ></motion.div>
        </div>
      </div>
    </header>
  );
};
