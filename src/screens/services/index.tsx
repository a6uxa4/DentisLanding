import React, { useState } from "react";
import { ServicesCard } from "@/components/services/ServicesCard";
import { SubServicesCard } from "@/components/services/SubServicesCard";
import { SERVICES_DATA } from "@/utils/constants/services.constant";
import { motion } from "framer-motion";

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
        <h1 className="text-[30px] font-bold font-mono">Наши Услуги</h1>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-center gap-3">
          {SERVICES_DATA.map((item) => (
            <ServicesCard
              key={item.id}
              service={item}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          ))}
        </div>
        <div className="w-full h-full flex flex-wrap justify-center gap-3">
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
      </div>
    </div>
  );
};
