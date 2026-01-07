import ActionCard from "@/components/ui/ActionCard";
import TopTitle from "@/components/ui/TopTitle";
import { SpecialFeatures } from "@/constants";

export default function AcademicsFeatures() {
  return (
    <section>
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            title="Our Special Features"
            type="Our Features"
          />
          <div className="grid grid-cols-3 gap-x-10 gap-y-20">
            {SpecialFeatures.map((el) => (
              <ActionCard key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
