import { ServicesCard } from "@/components/services/ServicesCard";
import { SubServicesCard } from "@/components/services/SubServicesCard";
import { SERVICES_DATA } from "@/utils/constants/services.constant";
import React, { useState } from "react";

export const ServicesPage = () => {
  const [activeService, setActiveService] = useState(1);
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
        {SERVICES_DATA[activeService - 1].subServices.map((item) => (
          <SubServicesCard key={item.name} subService={item} />
        ))}
      </div>
    </div>
  );
};
