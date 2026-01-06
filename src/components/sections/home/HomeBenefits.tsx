import TopTitle from "@/components/ui/TopTitle";
import { Benefits } from "@/constants";
import Image from "next/image";

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
          <ul className="grid grid-cols-3 gap-x-10 gap-y-21.25">
            {Benefits.map((el) => (
              <li
                key={el.id}
                className="bg-white relative border-2 rounded-lg p-[80px_50px] border-[#262626] shadow-[6px_6px_0_2px_#1E1E1E]"
              >
                <div className="bg-[#FFDECC] absolute -top-8.75  w-18.5 h-18.5 flex items-center justify-center rounded-lg border-2 border-[#262626]">
                  <Image src={el.image} alt={el.title} />
                </div>
                <h3 className="text-[28px] font-bold text-[#1A1A1A] mb-4">
                  {el.title}
                </h3>
                <p className="text-[20px] font-medium text-[#4C4C4D]">
                  {el.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
