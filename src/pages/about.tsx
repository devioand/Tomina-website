import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import AboutUsHeader from "../components/about/AboutUsHeader";
import Certificates from "../components/about/Certificates";
import MissionAndVision from "../components/about/MissionAndVision";
import OurCompany from "../components/about/OurCompany";
import OurTeam from "../components/about/OurTeam";
import OurQuality from "../components/about/OurQuality";
import Footer from "../components/Footer";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <AboutUsHeader />
      <OurQuality />
      <MissionAndVision />
      <OurCompany />
      <OurTeam />
      <Certificates />
      <Footer />
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Us</title>;
