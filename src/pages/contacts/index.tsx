"use client";

import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import clsx from "clsx";
import { useRouter } from "next/router";
import { withLayout } from "@/Layout";
import Head from "next/head";

const ContactsPage: NextPage = () => {
  const route = useRouter();

  return (
    <div className="container flex flex-col gap-4">
      <Head>
        <title>Estetic Clinic - Контакты</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Dental Clinic Estetic Бишкек предлагает все виды 
                стоматологических услуг - лечение, протезирование, имплантация и др. 
                Квалифицированные врачи, современное оборудование, гарантия качества. 
                Запишитесь на прием онлайн"
        />
        <meta
          name="keywords"
          content="Эстетик Клиник Бишкек,
                эстетик клиник, клиника эстетик,veneers clinic,
                dental clinic, эстетик клиник бишкек
                стоматология Бишкек, стоматология Кыргызстан
                стоматология цены Бишкек
                лечение зубов Бишкек
                протезирование зубов Бишкек
                имплантация зубов Бишкек
                безболезненное лечение зубов
                современное стоматологическое оборудование
                высококвалифицированные стоматологи"
        />
        <meta name="author" content="AkSoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <br />
          <div className="flex flex-col">
            <span className="text-gray-500">Instagram:</span>
            <a
              href="https://www.instagram.com/estetic_clinik/"
              className="flex items-center gap-2 underline text-[#00d6d4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9.00084 0C6.55657 0 6.24982 0.0106877 5.28981 0.0543752C4.33167 0.0982502 3.67766 0.249938 3.10541 0.4725C2.51346 0.702375 2.01133 1.00988 1.51108 1.51031C1.01045 2.01056 0.702945 2.51269 0.472317 3.10444C0.24919 3.67687 0.0973134 4.33106 0.054188 5.28881C0.01125 6.24881 0 6.55575 0 9C0 11.4443 0.0108753 11.7501 0.0543757 12.7101C0.0984387 13.6682 0.250128 14.3222 0.472505 14.8944C0.70257 15.4864 1.01007 15.9885 1.51052 16.4888C2.01058 16.9894 2.51271 17.2976 3.10428 17.5275C3.67691 17.7501 4.33111 17.9017 5.28906 17.9456C6.24907 17.9893 6.55563 18 8.99972 18C11.4442 18 11.75 17.9893 12.71 17.9456C13.6681 17.9017 14.3229 17.7501 14.8955 17.5275C15.4873 17.2976 15.9887 16.9894 16.4887 16.4888C16.9894 15.9885 17.2969 15.4864 17.5275 14.8946C17.7487 14.3222 17.9006 13.668 17.9456 12.7102C17.9888 11.7502 18 11.4443 18 9C18 6.55575 17.9888 6.249 17.9456 5.289C17.9006 4.33087 17.7487 3.67687 17.5275 3.10462C17.2969 2.51269 16.9894 2.01056 16.4887 1.51031C15.9881 1.00969 15.4875 0.702188 14.895 0.4725C14.3212 0.249938 13.6668 0.0982502 12.7087 0.0543752C11.7487 0.0106877 11.4431 0 8.99803 0H9.00084ZM8.19346 1.62187C8.43309 1.6215 8.70047 1.62187 9.00084 1.62187C11.4039 1.62187 11.6887 1.6305 12.6376 1.67363C13.5151 1.71375 13.9914 1.86038 14.3086 1.98356C14.7287 2.14669 15.0281 2.34169 15.3429 2.65669C15.6579 2.97169 15.8529 3.27169 16.0164 3.69169C16.1396 4.00856 16.2864 4.48481 16.3264 5.36231C16.3695 6.31106 16.3789 6.59606 16.3789 8.99794C16.3789 11.3998 16.3695 11.6848 16.3264 12.6336C16.2862 13.5111 16.1396 13.9873 16.0164 14.3042C15.8533 14.7242 15.6579 15.0232 15.3429 15.3381C15.0279 15.6531 14.7288 15.8481 14.3086 16.0112C13.9918 16.1349 13.5151 16.2812 12.6376 16.3213C11.6889 16.3644 11.4039 16.3738 9.00084 16.3738C6.59763 16.3738 6.31282 16.3644 5.36406 16.3213C4.48655 16.2808 4.01029 16.1342 3.69285 16.011C3.27285 15.8479 2.97284 15.6529 2.65784 15.3379C2.34284 15.0229 2.14784 14.7236 1.98433 14.3034C1.86114 13.9866 1.71433 13.5103 1.67439 12.6328C1.63127 11.6841 1.62264 11.3991 1.62264 8.99569C1.62264 6.59231 1.63127 6.30881 1.67439 5.36006C1.71452 4.48256 1.86114 4.00631 1.98433 3.68906C2.14746 3.26906 2.34284 2.96906 2.65784 2.65406C2.97284 2.33906 3.27285 2.14406 3.69285 1.98056C4.0101 1.85681 4.48655 1.71056 5.36406 1.67025C6.19432 1.63275 6.51607 1.6215 8.19346 1.61962V1.62187ZM13.805 3.11625C13.2088 3.11625 12.725 3.59944 12.725 4.19587C12.725 4.79212 13.2088 5.27588 13.805 5.27588C14.4013 5.27588 14.885 4.79212 14.885 4.19587C14.885 3.59962 14.4013 3.11587 13.805 3.11587V3.11625ZM9.00084 4.37812C6.44838 4.37812 4.37892 6.44756 4.37892 9C4.37892 11.5524 6.44838 13.6209 9.00084 13.6209C11.5533 13.6209 13.622 11.5524 13.622 9C13.622 6.44756 11.5531 4.37812 9.00066 4.37812H9.00084ZM9.00084 6C10.6576 6 12.0009 7.34306 12.0009 9C12.0009 10.6567 10.6576 12 9.00084 12C7.34389 12 6.00081 10.6567 6.00081 9C6.00081 7.34306 7.34389 6 9.00084 6Z"
                  fill="url(#paint0_radial_4096_122307)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_4096_122307"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12.05 20.5761) rotate(-112.995) scale(21.8433 20.3142)"
                  >
                    <stop stopColor="#FFDD55" />
                    <stop offset="0.1" stopColor="#FFDD55" />
                    <stop offset="0.5" stopColor="#FF543E" />
                    <stop offset="0.75" stopColor="#C837AB" />
                    <stop offset="0.854167" stopColor="#C837AB" />
                    <stop offset="1" stopColor="#4367C9" />
                  </radialGradient>
                </defs>
              </svg>
              <span> Estetic_clinik</span>
            </a>

            <br />
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

export default withLayout(ContactsPage);
