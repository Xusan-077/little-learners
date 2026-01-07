import ActionCard from "@/components/ui/ActionCard";
import TopTitle from "@/components/ui/TopTitle";
import { Recognitions } from "@/constants";

export default function AboutRecognitions() {
  return (
    <section>
      <div className="container">
        <div className="mb-50 max-[650px]:mb-20">
          <TopTitle
            description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
            title="Our Awards and Recognitions"
            type="Our Achievements"
          />
          <div className="grid grid-cols-3 gap-10">
            {Recognitions.map((el) => (
              <ActionCard key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
