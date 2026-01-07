import AdmissionsProcess from "@/components/sections/admissions/AdmissionsProcess";
import AdmissionsStructure from "@/components/sections/admissions/AdmissionsStructure";
import Welcome from "@/components/ui/Welcome";

export default function AdmissionsView() {
  return (
    <>
      <Welcome
        subtitle="Admission"
        title="Join Our Family of Young Learners"
        describtion="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />
      <AdmissionsProcess />
      <AdmissionsStructure />
    </>
  );
}
