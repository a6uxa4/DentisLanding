"use client";

import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

const ContactsPage: NextPage = () => {
  const route = useRouter();

  return (
    <div className="container flex flex-col gap-4">
      <div className="fixed z-20 bottom-10 left-0 bg-white py-2 w-screen flex items-center justify-center">
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
      <div className="w-full flex gap-4 px-10 py-10 xl:flex-col xl:items-center">
        <div className="w-1/2 shadow-xl p-3 px-4 flex flex-col gap-2 md:w-full">
          <p className="text-xl">Estetic Clinic Бишкек</p>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500">Адрес:</span>
            <p className=" flex flex-col gap-1">
              <span className="!text-md">130 просп. Юнусалиева, Бишкек</span>
              <span className="text-gray-500 text-sm">
                Стоматологическая клиника Estetic Clinic предлагает все виды
                стоматологических услуг - лечение, протезирование, имплантация и
                др. Квалифицированные врачи, современное оборудование, гарантия
                качества. Запишитесь на прием онлайн
              </span>
            </p>
          </div>
          <br />
          <div className="flex flex-col">
            <span className="text-gray-500">Телефон:</span>
            <a
              href="tel:+996999554455"
              className="flex items-center gap-2 underline text-[#00d6d4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#00d6d4"
                  fillRule="evenodd"
                  d="M4.458 2.047a.161.161 0 00-.228 0L2.839 3.438a2.863 2.863 0 00-.582 3.21 18.316 18.316 0 009.095 9.095 2.863 2.863 0 003.21-.582l1.39-1.39a.161.161 0 000-.229l-1.87-1.871a.16.16 0 00-.187-.03l-1.038.519a3.322 3.322 0 01-3.835-.623l-2.56-2.559a3.322 3.322 0 01-.622-3.835l.52-1.038a.161.161 0 00-.03-.186L4.457 2.047zM2.816.633a2.161 2.161 0 013.056 0l1.871 1.871c.658.658.821 1.663.405 2.495L7.63 6.038a1.322 1.322 0 00.248 1.526l2.559 2.56a1.322 1.322 0 001.526.247l1.039-.52a2.161 2.161 0 012.495.405l1.871 1.872a2.161 2.161 0 010 3.056l-1.391 1.392a4.863 4.863 0 01-5.452.988A20.317 20.317 0 01.437 7.475a4.863 4.863 0 01.989-5.45L2.815.632z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>+996 (999) 55-44-55</span>
            </a>
          </div>
          <div className="w-fit h-full flex items-center justify-center md:hidden">
            <Button
              onClick={() => {
                route.push("/#appointments");
              }}
              className={clsx(
                "skew-x-[-10deg] bg-[#00d6d4] text-white font-semibold text-[16px]"
              )}
            >
              Записаться на прием
            </Button>
          </div>
        </div>
        <div className="w-full h-[400px] z-10 xl:mb-[100px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.4658717191096!2d74.62038967607693!3d42.841895304524826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb730203ca65f%3A0x6ccc339f5ba65060!2sEstetic%20Clinic!5e0!3m2!1sru!2skg!4v1705313283766!5m2!1sru!2skg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;