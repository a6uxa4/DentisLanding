import { NextPage } from "next";
import Image from "next/image";
import PhotoAbout from "../../assets/images/About.jpg";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import clsx from "clsx";

const AboutPage: NextPage = () => {
  return (
    <div className="w-[100vw] h-full flex lg:flex-col lg:items-center lg:mb-14">
      <div className="fixed z-20 bottom-10 left-0 py-2 w-screen flex items-center justify-center">
        <Link href="/">
          <Button
            className={clsx(
              "skew-x-[-10deg] bg-[#00d6d4] text-white font-semibold text-[16px]"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              fontSize="20"
              viewBox="0 0 1024 1024"
            >
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
            </svg>
            <span>Вернутся на главную страницу</span>
          </Button>
        </Link>
      </div>
      <div className="w-[50%] h-full flex flex-col gap-10 p-10 lg:w-full md:text-[14px] md:gap-5">
        <span>
          Estetic Clinic - это современная стоматологическая клиника,
          предлагающая высококачественные услуги в уютной и спокойной
          обстановке.
        </span>
        <span>
          В нашей клинике Вы сможете сделать панорамный снимок зубов на новейшем
          оборудовании Vatech 2023 года. Что гарантирует качественный снимок и
          дальнейшее лечение
        </span>
        <span>
          Мы специализируемся в широком спектре стоматологических процедур: от
          рутинной гигиены полости рта и лечения кариеса до сложных
          ортодонтических коррекций и хирургических вмешательств. Наша клиника
          оборудована передовой техникой, что позволяет нам предоставлять
          высокоточные и безопасные процедуры.
        </span>
        <span>
          Мы гордимся тем, что наш подход к каждому пациенту индивидуален и
          интегрирует их пожелания и потребности. Мы стремимся создать уютную и
          доверительную атмосферу.
        </span>
        <span>
          Estetic Clinic- место, где улыбка станет ярче. Доверьте свое улучшение
          здоровью и красоте нашей опытной команде, и мы с радостью сделаем вашу
          улыбку самой лучшей версией себя!
        </span>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center pt-20 lg:w-full lg:p-10">
        <Image
          className="w-[500px] h-[500px] rounded-[24px] lg:w-full md:h-[300px]"
          src={PhotoAbout}
          alt="about"
        />
      </div>
    </div>
  );
};
export default AboutPage;
