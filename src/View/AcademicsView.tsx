import AcademicsFeatures from "@/components/sections/academics/AcademicsFeatures";
import AcademicsLearn from "@/components/sections/academics/AcademicsLearn";
import Welcome from "@/components/ui/Welcome";

export default function AcademicsView() {
  return (
    <>
      <Welcome
        subtitle="Academics"
        describtion="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
        title="Nurturing Young Minds for Success"
      />
      <AcademicsFeatures />
      <AcademicsLearn />
    </>
  );
}
