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
    <div className="w-full flex flex-col">
      <div className="flex w-full gap-4">
        {SERVICES_DATA.map((item) => (
          <ServicesCard
            key={item.id}
            service={item}
            activeService={activeService}
            setActiveService={setActiveService}
          />
        ))}
      </div>
      <div className="flex">
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
          >
            <SubServicesCard subService={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
