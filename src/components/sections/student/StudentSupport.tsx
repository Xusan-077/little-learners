import ActionCard from "@/components/ui/ActionCard";
import TopTitle from "@/components/ui/TopTitle";
import { SupportServices } from "@/constants";

export default function StudentSupport() {
  return (
    <section>
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
            title="Student Support"
            type="Our Achievements"
          />
          <div className="grid grid-cols-3 gap-x-10 gap-y-20 max-[1200px]:grid-cols-2 max-[640px]:gap-y-15 max-[800px]:grid-cols-1">
            {SupportServices.map((el) => (
              <ActionCard key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
