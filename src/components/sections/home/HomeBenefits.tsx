import ActionCard from "@/components/ui/ActionCard";
import TopTitle from "@/components/ui/TopTitle";
import { Benefits } from "@/constants";

export default function HomeBenefits() {
  return (
    <section id="benefits" className="scroll-mt-24">
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
            title="Our Benefits"
            type="Children Deserve Bright Future"
          />
          <ul className="grid grid-cols-3 gap-x-10 gap-y-21.25 max-[1200px]:grid-cols-2 max-[786px]:grid-cols-1 max-[786px]:gap-15">
            {Benefits.map((el) => (
              <ActionCard {...el} key={el.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
