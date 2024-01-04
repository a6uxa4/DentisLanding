import { withLayout } from "@/Layout";
import SwitchContact from "@/components/UI/SwitchContact/SwitchContact";
import { AboutPage } from "@/screens/about";
import { AdvantagesPage } from "@/screens/advantages";
import { BannerPage } from "@/screens/banner";
import { FeedbackPage } from "@/screens/feedback";
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
      <FeedbackPage />
      <SwitchContact />
    </>
  );
}

export default withLayout(Home);
