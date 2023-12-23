import { withLayout } from "@/Layout";
import { AboutPage } from "@/screens/about";
import { AdvantagesPage } from "@/screens/advantages";
import { BannerPage } from "@/screens/banner";
import { PersonalPage } from "@/screens/personal";
import { ServicesPage } from "@/screens/services";
import { WorkPage } from "@/screens/work";

function Home() {
  return (
    <>
      <BannerPage />
      <ServicesPage />
      <AdvantagesPage />
      <PersonalPage />
      <AboutPage />
      <WorkPage />
    </>
  );
}

export default withLayout(Home);
