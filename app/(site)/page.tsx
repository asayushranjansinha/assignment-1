import HeroSection from "@/components/landing-page/hero-section";
import MotionWrapper from "@/components/motion/motion-wrapper";

import SectionThree from "@/components/landing-page/section-three";
import SectionTwo from "@/components/landing-page/section-two";
import SectionFour from "@/components/landing-page/section-four";
import SectionFive from "@/components/landing-page/section-five";
import Footer from "@/components/landing-page/footer";

export default function Home() {
  return (
    <main className="space-y-10 pb-8">
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
      <MotionWrapper>
        <SectionFive />
      </MotionWrapper>
      <Footer />
    </main>
  );
}
