import HeroSection from "@/components/landing-page/hero-section";
import MotionWrapper from "@/components/motion/motion-wrapper";

import SectionThree from "@/components/landing-page/section-three";
import SectionTwo from "@/components/landing-page/section-two";
import SectionFour from "@/components/landing-page/section-four";

export default function Home() {
  return (
    <main className="space-y-10">
      <HeroSection />

      <MotionWrapper>
        <SectionTwo />
      </MotionWrapper>
      <MotionWrapper>
        <SectionThree />
      </MotionWrapper>
      <MotionWrapper>
        <SectionFour />
      </MotionWrapper>
    </main>
  );
}
