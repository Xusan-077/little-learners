import TopTitle from "@/components/ui/TopTitle";
import { MembersData } from "@/constants";
import { icons } from "@/constants/icons";
import Image from "next/image";

export default function AboutMembers() {
  return (
    <section className="">
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
            title="Our Team Members"
            type="Our Teachers With Experties"
          />
          <div className="grid grid-cols-2 gap-12.5">
            {MembersData.map((el) => (
              <div
                key={el.id}
                className="border-2 border-[#262626] shadow-[6px_6px_0_2px_#1E1E1E] rounded-lg p-12.5 bg-white"
              >
                <div className="mb-7.5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={el.image}
                      alt={el.title}
                      className="w-25 h-25"
                    />
                    <h3 className="text-[30px] text-[#333333] font-extrabold">
                      {el.userName}
                    </h3>
                  </div>
                  <button className="border-2 border-[#262626] w-14 h-14 flex rounded-lg cursor-pointer items-center justify-center bg-[#FFDECC]">
                    <Image src={icons.mail} alt="mail icon" />
                  </button>
                </div>
                <div className="border-2 border-[#262626] rounded-lg bg-[#FFF5F0] p-7.5">
                  <h3 className="text-[24px] font-semibold text-[#333333] mb-5">
                    {el.title}
                  </h3>
                  <p className="text-[20px] font-medium text-[#333333]">
                    {el.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
