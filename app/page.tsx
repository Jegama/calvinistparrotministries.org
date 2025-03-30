import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import MissionSection from '../components/homepage/MissionSection';
import BeliefSection from '../components/homepage/BeliefSection';
import ToolsSection from '../components/homepage/ToolsSection';
import GlobalOutreachSection from '../components/homepage/GlobalOutreachSection';
import NonprofitSection from '../components/homepage/NonprofitSection';
import CallToActionSection from '../components/homepage/CallToActionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <BeliefSection />
      <ToolsSection />
      <GlobalOutreachSection />
      <NonprofitSection />
      <CallToActionSection />
    </>
  );
}
