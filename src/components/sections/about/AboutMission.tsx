import TopTitle from "@/components/ui/TopTitle";
import { Mission } from "@/constants";
import Image from "next/image";

export default function AboutMission() {
  return (
    <section>
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
            title="Our Mission & Visions"
            type="Mission & Visions"
          />
          <div className="">
            <div className="grid grid-cols-2 gap-15 max-[1280px]:gap-10 max-[900px]:grid-cols-1">
              {Mission.map((el) => (
                <div
                  key={el.id}
                  className="border-2 bg-white max-[640px]:p-10 border-[#262626] rounded-lg shadow-[6px_6px_0_2px_#1A1A1A] max-[1280px]:p-12.5 p-[70px_60px]"
                >
                  <div className="flex items-center justify-between mb-15 max-[640px]:mb-10">
                    <h4 className="max-[640px]:text-[30px] text-[48px] font-bold text-[#1A1A1A]">
                      {el.title}
                    </h4>
                    <Image
                      src={el.image}
                      alt={el.title}
                      className="max-[640px]:w-12.5 max-[640px]:h-12.5"
                    />
                  </div>
                  <p className="max-[640px]:text-[16px] text-[20px] font-medium text-[#333333]">
                    {el.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
