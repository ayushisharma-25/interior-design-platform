import "./About.css";
import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import AOS from "aos";
import "aos/dist/aos.css";
import AboutHeroSection from "./AboutHeroSection";
import ExclusiveSection from "./ExclusiveSection";
import ExperienceSection from "./ExperienceSection";
import MinimalSection from "./MinimalSection";
import InspiringSection from "./InspiringSection";
import ProjectsSection from "./ProjectsSection";

function About({ triggerToast }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <AboutHeroSection />
      <ExclusiveSection triggerToast={triggerToast} />
      <ExperienceSection />
      <MinimalSection />
      <InspiringSection />
      <ProjectsSection />
    </>
  )
}
export default About;