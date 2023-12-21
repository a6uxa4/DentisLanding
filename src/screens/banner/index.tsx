import { Typewriter } from "react-simple-typewriter";
import BannerPhoto from "../../assets/images/Banner.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const BannerPage = () => {
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

  return (
    <div className="w-full h-full flex justify-between items-center gap-28 border-b pb-[50px]">
      <div className="w-full">
        <div className="bg-[#d7fffe] absolute bottom-2 -z-10  h-[500px] w-[35.25rem] rounded-full blur-[10rem]"></div>
        <div className="w-full min-w-[650px] max-w-[650px] font-mono font-black text-[40px] leading-[50px] tracking-wide">
          <Typewriter
            words={[
              "Превосходный опыт",
              "Доверьте свою улыбку экспертам",
              "Радость здоровой улыбки - наша цель в",
              "Искусство здоровой улыбки начинается здесь, в нашей",
              "Качество заботы о вашей улыбке - наша страсть к",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={5000}
          />
          <span className="text-[#00d6d4]">стомотологии</span>
        </div>
      </div>
      <div className="w-full h-full relative flex items-center justify-center ">
        <motion.div
          className="w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#d7fffe] via-[#40fffc] to-[#00d6d4] shadow-xl"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        ></motion.div>
        <motion.div
          className="w-[350px] h-[500px] absolute top-0"
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
            className="w-[350px] h-[500px]"
          />
        </motion.div>
      </div>
    </div>
  );
};
