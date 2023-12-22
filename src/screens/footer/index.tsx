import React from "react";

export const Footer = () => {
  return (
    <div className="h-[200px] bg-[#00d6d4] text-white">
      <footer className="h-full max-w-[1440px] text-base-content flex items-center justify-between m-auto px-8 py-8">
        <div className="flex flex-col gap-5 h-full">
          <div
            onClick={() => (window.location.href = `https://cheber.online`)}
            className="text-[23px] flex items-center font-medium text-barber-color title-font cursor-pointer"
          >
            ESTETIC
          </div>
          <p className="text-barber-color max-w-[350px] xs:text-xs xs:max-w-[230px]">
            Искусство здоровой улыбки начинается здесь, в нашей стомотологии
          </p>
        </div>
        <p className="text-barber-color xs:text-[10px]">
          © 2023 aksoft
          <br />
          Все права защищены.
        </p>
      </footer>
    </div>
  );
};
