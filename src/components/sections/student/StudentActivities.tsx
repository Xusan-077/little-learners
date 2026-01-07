import ActionCard from "@/components/ui/ActionCard";
import TopTitle from "@/components/ui/TopTitle";
import { ActivitiesData } from "@/constants";

export default function StudentActivities() {
  return (
    <section>
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
            title="Extracurricular Activities"
            type="Our Features"
          />
          <div className="grid grid-cols-3 gap-x-10 gap-y-20">
            {ActivitiesData.map((el) => (
              <ActionCard key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
