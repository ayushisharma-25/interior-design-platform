import React from "react";
import "./Services.css";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesMainSection from "./ServicesMainSection";
import DesignProcessSection from "./DesignProcessSection";
import TestimonialSection from "./TestimonialSection";
import RecentProjectsSection from "./RecentProjectsSection";
import BeforeAfterSection from "./BeforeAfterSection";
import FaqSection from "./FaqSection";
import CtaSection from "./CtaSection";
function Services() {

  return (
    <>
      <ServicesHeroSection />
      <ServicesMainSection />
      <DesignProcessSection />
      <RecentProjectsSection />
      <TestimonialSection />
      <BeforeAfterSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

export default Services;