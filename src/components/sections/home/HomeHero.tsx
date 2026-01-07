import { images } from "@/constants/images";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section id="home">
      <div className="container">
        <div className="max-[1024px]:flex-col max-[1024px]:items-center mb-50 max-[640px]:mb-20 flex items-center gap-15 justify-between">
          <div className="">
            <Image
              src={images.heroImage}
              alt="home hero image"
              className="w-190 h-190 max-[1300px]:w-150 max-[1300px]:h-150 max-[640px]:w-90 max-[640px]:h-100"
            />
          </div>
          <div className="max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-center">
            <span className="max-[640px]:text-[16px] text-[22px] border-b-3 font-medium text-[#262626] inline-block pb-2 border-b-[#262626]">
              Welcome to Little Learners Academy
            </span>
            <h1 className="max-[1024px]:text-center max-[640px]:text-[30px] text-[54px] text-[#1A1A1A] font-extrabold max-w-215 mb-7.5 max-[640px]:mb-4">
              Where Young Minds Blossom and{" "}
              <span className="text-[#FF8D4D]">Dreams Take Flight.</span>
            </h1>
            <p className="max-[1024px]:text-center max-[640px]:text-[16px] text-[20px] font-medium max-w-215 mb-15">
              Our kinder garden school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </p>
            <div className="bg-[#FFEFE5] max-[750px]:grid-cols-1 max-[750px]: max-[1024px]:w-full grid grid-cols-3 shadow-[8px_8px_0_1px_#FFBE99] p-[24px_50px] rounded-lg border-2 border-[#262626]">
              <div className="max-[750px]:flex max-[750px]:flex-col max-[750px]:items-center border-b-2 border-b-[#262626] pb-5 mb-5">
                <h3 className="text-[44px] font-extrabold text-[#262626]">
                  +7000
                </h3>
                <span className="text-[18px] font-medium text-[#262626]">
                  Students Passed Out
                </span>
              </div>
              <div className="max-[750px]:flex max-[750px]:flex-col max-[750px]:items-center border-b-2 border-b-[#262626] pb-5 mb-5">
                <h3 className="text-[44px] font-extrabold text-[#262626]">
                  +37
                </h3>
                <span className="text-[18px] font-medium text-[#262626]">
                  Awards & Recognitions
                </span>
              </div>
              <div className="max-[750px]:flex max-[750px]:flex-col max-[750px]:items-center">
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
