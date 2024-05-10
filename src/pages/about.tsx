import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import AboutUsHeader from "../components/about/AboutUsHeader";
import Certificates from "../components/about/Certificates";
import MissionAndVision from "../components/about/MissionAndVision";
import OurCompany from "../components/about/OurCompany";
import OurTeam from "../components/about/OurTeam";
import OurQuality from "../components/about/OurQuality";
import Footer from "../components/Footer";
import OurCompanyTour from "../components/about/OurCompanyTour";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <AboutUsHeader />
      <OurQuality />
      <MissionAndVision />
      <OurCompanyTour />
      <OurCompany />
      <OurTeam />
      <Certificates />
      <Footer curveColor="#A51E1E" />
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About us</title>;
