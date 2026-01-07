import StudentActivities from "@/components/sections/student/StudentActivities";
import StudentCelebrations from "@/components/sections/student/StudentCelebrations";
import StudentSupport from "@/components/sections/student/StudentSupport";
import Welcome from "@/components/ui/Welcome";

export default function StudentView() {
  return (
    <>
      <Welcome
        subtitle="Enriching Student Life"
        title="Embracing Learning with Discovery and Joy"
        describtion="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
      />
      <StudentActivities />
      <StudentCelebrations />
      <StudentSupport />
    </>
  );
}
