"use client";

import { withLayout } from "@/Layout";
import SwitchContact from "@/components/UI/SwitchContact/SwitchContact";
import { AboutPage } from "@/screens/about";
import { AdvantagesPage } from "@/screens/advantages";
import AppointmentsPage from "@/screens/appointments";
import { BannerPage } from "@/screens/banner";
import { FeedbackPage } from "@/screens/feedback";
import { PersonalPage } from "@/screens/personal";
import { ServicesPage } from "@/screens/services";
import { WorkPage } from "@/screens/work";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <AppointmentsPage />
      <SwitchContact />
      <SpeedInsights />
    </>
  );
}

export default withLayout(Home);
