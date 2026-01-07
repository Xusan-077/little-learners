import AboutHistory from "@/components/sections/about/AboutHistory";
import AboutMembers from "@/components/sections/about/AboutMembers";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutRecognitions from "@/components/sections/about/AboutRecognitions";
import Welcome from "@/components/ui/Welcome";

export default function AboutView() {
  return (
    <>
      <Welcome
        subtitle="Overview"
        title="Welcome to Little Learners Academy"
        describtion="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      <AboutMission />
      <AboutRecognitions />
      <AboutHistory />
      <AboutMembers />
    </>
  );
}
