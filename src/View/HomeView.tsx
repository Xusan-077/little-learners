import HomeBenefits from "@/components/sections/home/HomeBenefits";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeNavigate from "@/components/sections/home/HomeNavigate";
import HomeQuestions from "@/components/sections/home/HomeQuestions";
import HomeTestimonials from "@/components/sections/home/HomeTestimonials";

export default function HomeView() {
  return (
    <>
      <HomeHero />
      <HomeBenefits />
      <HomeTestimonials />
      <HomeQuestions />
      <HomeNavigate />
    </>
  );
}
