import StudentCard from "@/components/ui/StudentCard";
import TopTitle from "@/components/ui/TopTitle";
import { LearnData } from "@/constants";

export default function AcademicsLearn() {
  return (
    <section>
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
            title="What Students Learn"
            type="Our Features"
          />
          <div className="grid grid-cols-3 gap-12.5 max-[1200px]:grid-cols-2 max-[640px]:grid-cols-1">
            {LearnData.map((el) => (
              <StudentCard {...el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
