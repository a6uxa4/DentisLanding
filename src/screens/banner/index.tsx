import { Typewriter } from "react-simple-typewriter";

export const BannerPage = () => {
  return (
    <div className="w-[100vw] h-[600px] relative flex justify-center items-center">
      <div className="w-full h-full blur-[3px] absolute bg-cover bg-no-repeat bg-fixed bg-[url('https://img.freepik.com/free-photo/professional-dentist-tools-in-the-dental-office_1204-235.jpg?w=1800&t=st=1703237082~exp=1703237682~hmac=4721edff37f238fce621147194ca6eb24dbf6d26b89d731c9a1b69b00111fba4')]"></div>
      <div className="w-full px-11 max-w-[1440px] blur-none">
        <div className="w-full min-w-[650px] max-w-[650px] font-mono font-black text-[40px] leading-[50px] tracking-wide">
          <Typewriter
            words={[
              "Превосходный опыт",
              "Доверьте свою улыбку экспертам",
              "Радость здоровой улыбки - наша цель в",
              "Искусство здоровой улыбки начинается здесь, в нашей",
              "Качество заботы о вашей улыбке - наша страсть к",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={5000}
          />
          <span className="text-[#00d6d4]">стомотологии</span>
        </div>
      </div>
    </div>
  );
};
