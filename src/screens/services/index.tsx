import React, { useState } from "react";
import { ServicesCard } from "@/components/services/ServicesCard";
import { SubServicesCard } from "@/components/services/SubServicesCard";
import { SERVICES_DATA } from "@/utils/constants/services.constant";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import CustomSVG from "@/components/UI/CustomSvg/CustomSvg";
import Image from "next/image";

export const ServicesPage = () => {
  const [activeService, setActiveService] = useState(1);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div className="w-full py-10">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          Наши Услуги
        </h1>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-center gap-3 lg:hidden">
          {SERVICES_DATA.map((item) => (
            <ServicesCard
              key={item.id}
              service={item}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          ))}
        </div>
        <div className="w-full h-full flex flex-wrap justify-center gap-3 lg:hidden">
          {SERVICES_DATA[activeService - 1].subServices.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className="max-h-[250px]"
            >
              <SubServicesCard subService={item} />
            </motion.div>
          ))}
        </div>
        <div className="w-full !min-w-[90vw] !max-w-[90vw] xs:!min-w-[95vw] xs:!max-w-[95vw] hidden lg:block">
          <Accordion
            itemClasses={{
              title: "sm:text-[14px]",
            }}
            selectionMode="multiple"
          >
            {SERVICES_DATA.map((item) => (
              <AccordionItem
                key={item.id}
                startContent={
                  <CustomSVG
                    paths={item.icon.paths}
                    width={item.icon.width}
                    height={item.icon.height}
                    viewBox={item.icon.viewBox}
                    className="fill-black group-hover:fill-white sm:w-[30px]"
                  />
                }
                title={item.name}
              >
                <div className="flex flex-col gap-3 sm:gap-1">
                  {item.subServices.map((subItem, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-between border-b py-2"
                    >
                      <div className="w-full flex items-center justify-start gap-2">
                        <div className="min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] flex items-center justify-center sm:max-w-[40px] sm:max-h-[40px] sm:min-w-[40px] sm:min-h-[40px]">
                          <Image
                            src={subItem.photo}
                            alt="subIcon"
                            className="w-full h-full rounded-full min-w-[50px] min-h-[50px] sm:max-w-[40px] sm:max-h-[40px] sm:min-w-[40px] sm:min-h-[40px]"
                          />
                        </div>
                        <div className="text-[14px] sm:text-[12px] sm:max-w-[80%] xs:max-w-[50%]">
                          {subItem.name}
                        </div>
                      </div>
                      <button
                        style={{ transform: "skew(-14deg)" }}
                        className="bg-[#01e0de] px-[15px] rounded-md text-white py-[5px] text-[12px] sm:text-[10px] font-semibold cursor-pointer  hover:bg-[#14918f]"
                      >
                        Подробнее
                      </button>
                    </div>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
