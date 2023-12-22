import React from "react";
import BannerPhoto from "../../assets/images/Banner.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT } from "@/utils/constants/about.constant";
import CustomSVG from "@/components/UI/CustomSvg/CustomSvg";

export const AboutPage = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
      },
    }),
  };

  const fadeAnimationVariants = {
    initial: {
      opacity: 0,
      y: -300,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
      },
    }),
  };

  const fadeAnimationAbout = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 * index,
      },
    }),
  };

  return (
    <div className="w-[100vw] bg-[#EEF9F9] relative flex justify-center items-start py-10 text-center">
      <div className="w-full flex flex-col items-center justify-between gap-2 max-w-[1440px]">
        <div className="py-5 w-full flex items-center justify-center max-w-[400px]">
          <h1 className="text-lg font-semibold font-mono">
            Вам необходимо знать из чего состоит качественная услуга
            стоматологии
          </h1>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-full h-full relative flex items-center justify-center max-w-[500px]">
            <motion.div
              className="w-[350px] h-[350px] rounded-full bg-gradient-to-b from-[#d7fffe] via-[#40fffc] to-[#00d6d4] shadow-xl"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            ></motion.div>
            <motion.div
              className="w-[250px] h-[350px] absolute top-0"
              variants={fadeAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <Image
                src={BannerPhoto}
                alt="BannerPhoto"
                className="w-[250px] h-[350px]"
              />
            </motion.div>
          </div>
          <div className="w-full flex gap-3">
            {ABOUT.map((about) => (
              <div
                className="w-[250px] flex flex-col items-center justify-start gap-5"
                key={about.id}
              >
                <div className="w-[100px] h-[100px] bg-white flex items-center justify-center rounded-full relative">
                  <div className="w-8 h-8 rounded-full bg-[#eef9f9] absolute top-0 left-0"></div>
                  <motion.div
                    variants={fadeAnimationAbout}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={about.id}
                    className="w-6 h-6 rounded-full bg-[#00d6d4] absolute top-0 left-0 text-white"
                  >
                    {about.id}
                  </motion.div>
                  <CustomSVG
                    paths={about.icon.paths}
                    width={about.icon.width}
                    height={about.icon.height}
                    className="fill-[#00D6D6]"
                  />
                </div>
                <h1 className="text-base font-medium">{about.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
