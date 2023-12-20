import React from "react";

export const ScheduleContainer = () => {
  return (
    <div className="w-[140px] px-2 py-2 h-fit rounded-lg text-white bg-[#00d6d4] flex flex-col gap-2">
      <div>Пн 08:00–22:00</div>
      <div>Вт 08:00–22:00</div>
      <div>Ср 08:00–22:00</div>
      <div>Чт 08:00–22:00</div>
      <div>Пт 08:00–22:00</div>
      <div>Сб 08:00–22:00</div>
      <div>Вс Выходной</div>
    </div>
  );
};
