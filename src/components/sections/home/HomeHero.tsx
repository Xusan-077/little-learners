import { images } from "@/constants/images";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section id="home">
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20 flex items-center gap-15 justify-between">
          <div className="">
            <Image src={images.heroImage} alt="home hero image" className="" />
          </div>
          <div className="">
            <span className="text-[22px] border-b-3 font-medium text-[#262626] inline-block pb-2 border-b-[#262626]">
              Welcome to Little Learners Academy
            </span>
            <h1 className="text-[54px] text-[#1A1A1A] font-extrabold max-w-215 mb-[30px]">
              Where Young Minds Blossom and{" "}
              <span className="text-[#FF8D4D]">Dreams Take Flight.</span>
            </h1>
            <p className="text-[20px] font-medium max-w-215 mb-15">
              Our kinder garden school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </p>
            <div className="bg-[#FFEFE5] grid grid-cols-3 shadow-[8px_8px_0_1px_#FFBE99] p-[24px_50px] rounded-lg border-2 border-[#262626]">
              <div className="">
                <h3 className="text-[44px] font-extrabold text-[#262626]">
                  +7000
                </h3>
                <span className="text-[18px] font-medium text-[#262626]">
                  Students Passed Out
                </span>
              </div>
              <div className="">
                <h3 className="text-[44px] font-extrabold text-[#262626]">
                  +37
                </h3>
                <span className="text-[18px] font-medium text-[#262626]">
                  Awards & Recognitions
                </span>
              </div>
              <div className="">
                <h3 className="text-[44px] font-extrabold text-[#262626]">
                  +15
                </h3>
                <span className="text-[18px] font-medium text-[#262626]">
                  Experience Educators
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
