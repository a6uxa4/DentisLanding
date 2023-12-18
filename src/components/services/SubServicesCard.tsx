import Image from "next/image";

export const SubServicesCard = ({ subService }: any) => {
  console.log(subService);
  return (
    <div className="group w-[180px] h-[260px] rounded-lg bg-[#f3fbfb] flex flex-col items-center justify-around px-3 py-3 gap-2 cursor-pointer hover:bg-[#01d6d4] duration-700">
      <div className="w-[120px] h-[120px] min-h-[120px] min-w-[120px] flex items-center justify-center">
        <div className="flex w-full h-full items-center justify-center group-hover:hidden">
          <Image src={subService.icon} alt="icon" />
        </div>
        <div className="items-center justify-center hidden group-hover:flex">
          <Image src={subService.photo} alt="photo" />
        </div>
      </div>
      <div className="w-full h-full text-sm text-center group-hover:text-white">
        {subService.name}
      </div>
      <div className="w-fit px-2 py-2 bg-[#01e0de] skew-y-3">Подробнее</div>
    </div>
  );
};
