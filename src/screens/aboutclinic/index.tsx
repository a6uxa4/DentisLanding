"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export const AboutClinicPage = () => {
  const { ref } = useSectionInView("О клиникe");
  const [isActive, setIsActive] = useState<null | number>(null);

  return (
    <div id="abouts" ref={ref} className="w-full py-10 sm:py-5 scroll-mt-24">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          О клиникe
        </h1>
      </div>
      <div className="w-full flex items-center justify-center h-[500px] max-w-[1440px] m-auto px-5">
        <div
          className={clsx(
            "w-[50%] h-full grid grid-rows-2 grid-cols-2 border rounded-2xl",
            { "grid-cols-1 grid-rows-1": isActive !== null }
          )}
        >
          <div
            onMouseEnter={() => setIsActive(1)}
            onMouseLeave={() => setIsActive(null)}
            className={clsx(
              "flex gap-2 cursor-pointer transition-all",
              { hidden: isActive === null ? false : isActive !== 1 },
              {
                "flex-col items-center justify-center pt-[130px] pl-[130px]":
                  isActive !== 1,
              },
              { "flex-row items-start justify-start pt-5 pl-5": isActive === 1 }
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M6.6665 12C6.6665 6.83996 10.8398 2.66663 15.9998 2.66663C21.1598 2.66663 25.3332 6.83996 25.3332 12C25.3332 19 15.9998 29.3333 15.9998 29.3333C15.9998 29.3333 6.6665 19 6.6665 12ZM12.6665 12C12.6665 13.84 14.1598 15.3333 15.9998 15.3333C17.8398 15.3333 19.3332 13.84 19.3332 12C19.3332 10.16 17.8398 8.66663 15.9998 8.66663C14.1598 8.66663 12.6665 10.16 12.6665 12Z"
                fill="#00d6d4"
              />
            </svg>
            <h1
              className={clsx("text-[18px] font-sans font-semibold", {
                "text-[22px]": isActive !== null,
              })}
            >
              Наш адрес
            </h1>
          </div>
          <div
            onMouseEnter={() => setIsActive(2)}
            onMouseLeave={() => setIsActive(null)}
            className={clsx(
              "flex gap-2 cursor-pointer transition-all",
              { hidden: isActive === null ? false : isActive !== 2 },
              {
                "flex-col items-center justify-center pt-[130px] pr-[130px]":
                  isActive !== 2,
              },
              { "flex-row items-start justify-start pt-5 pl-5": isActive === 2 }
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M2.6665 16C2.6665 8.66666 8.6665 2.66666 15.9998 2.66666C23.3332 2.66666 29.3332 8.66666 29.3332 16C29.3332 23.3333 23.3332 29.3333 15.9998 29.3333C8.6665 29.3333 2.6665 23.3333 2.6665 16ZM14.6665 17.3333L21.5998 21.6L22.6665 19.8667L16.6665 16.2667V9.33333H14.6665V17.3333Z"
                fill="#00d6d4"
              />
            </svg>
            <h1
              className={clsx("text-[18px] font-sans font-semibold", {
                "text-[22px]": isActive !== null,
              })}
            >
              Время работы
            </h1>
          </div>
          <div
            onMouseEnter={() => setIsActive(3)}
            onMouseLeave={() => setIsActive(null)}
            className={clsx(
              "flex gap-2 cursor-pointer transition-all",
              { hidden: isActive === null ? false : isActive !== 3 },
              {
                "flex-col items-center justify-center pb-[130px] pl-[130px]":
                  isActive !== 3,
              },
              { "flex-row items-start justify-start pt-5 pl-5": isActive === 3 }
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              strokeWidth="2"
              stroke="#00d6d4"
            >
              <path
                d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                fill="#00d6d4"
              />
            </svg>
            <h1
              className={clsx("text-[18px] font-sans font-semibold", {
                "text-[22px]": isActive !== null,
              })}
            >
              Контакты
            </h1>
          </div>
          <div
            onMouseEnter={() => setIsActive(4)}
            onMouseLeave={() => setIsActive(null)}
            className={clsx(
              "flex flex-col items-center justify-center gap-2 cursor-pointer pb-[130px] pr-[130px]",
              { hidden: isActive === null ? false : isActive !== 4 }
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="#00d6d4"
              strokeWidth="2"
              stroke="#00d6d4"
            >
              <path d="M4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V8C4 8.53043 4.21071 9.03914 4.58579 9.41421C4.96086 9.78929 5.46957 10 6 10H8C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8V6C10 5.46957 9.78929 4.96086 9.41421 4.58579C9.03914 4.21071 8.53043 4 8 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579Z" />
              <path d="M14.5858 4.58579C14.2107 4.96086 14 5.46957 14 6V8C14 8.53043 14.2107 9.03914 14.5858 9.41421C14.9609 9.78929 15.4696 10 16 10H18C18.5304 10 19.0391 9.78929 19.4142 9.41421C19.7893 9.03914 20 8.53043 20 8V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H16C15.4696 4 14.9609 4.21071 14.5858 4.58579Z" />
              <path d="M4.58579 14.5858C4.21071 14.9609 4 15.4696 4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8C8.53043 20 9.03914 19.7893 9.41421 19.4142C9.78929 19.0391 10 18.5304 10 18V16C10 15.4696 9.78929 14.9609 9.41421 14.5858C9.03914 14.2107 8.53043 14 8 14H6C5.46957 14 4.96086 14.2107 4.58579 14.5858Z" />
              <path d="M14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V18C14 18.5304 14.2107 19.0391 14.5858 19.4142C14.9609 19.7893 15.4696 20 16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16C20 15.4696 19.7893 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858Z" />
            </svg>
            <h1
              className={clsx("text-[18px] font-sans font-semibold", {
                "text-[22px]": isActive !== null,
              })}
            >
              О нас
            </h1>
          </div>
        </div>
        <div className="w-[50%] h-full">
          {/* <Image
            className="w-full h-full flex items-center"
            src="https://nikolaevsk.njuans.ru/upload/no_img.jpg"
            alt="hhel"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </div>
  );
};
