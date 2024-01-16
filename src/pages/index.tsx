"use client";

import { withLayout } from "@/Layout";
import SwitchContact from "@/components/UI/SwitchContact/SwitchContact";
import { AboutPage } from "@/screens/about";
import { AboutClinicPage } from "@/screens/aboutclinic";
import { AdvantagesPage } from "@/screens/advantages";
import AppointmentsPage from "@/screens/appointments";
import { BannerPage } from "@/screens/banner";
import { CountUpPage } from "@/screens/countup";
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
      <AboutClinicPage />
      <CountUpPage />
      <AppointmentsPage />
      <SwitchContact />
    </>
  );
}

export default withLayout(Home);
