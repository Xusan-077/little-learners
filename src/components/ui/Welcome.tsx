import { icons } from "@/constants/icons";
import Image from "next/image";

interface Props {
  subtitle: string;
  title: string;
  describtion: string;
  inContact?: boolean;
}

export default function Welcome({
  subtitle,
  title,
  describtion,
  inContact,
}: Props) {
  return (
    <section>
      <div className="welcome max-w-455 mx-auto px-5">
        <div className="flex items-center justify-between border-2 bg-white border-[#262626] rounded-lg p-[150px_120px] mb-50 max-[640px]:mb-20">
          <div className="">
            <span className="bg-white inline-block p-[10px_20px] mb-5 font-medium text-[18px] border-2 border-[#262626] rounded-lg">
              {subtitle}
            </span>
            <h2 className="text-[48px] font-bold max-w-190">{title}</h2>
          </div>
          <div className="">
            <p className="text-[20px] max-w-195 font-medium text-[#333333]">
              {describtion}
            </p>
            {inContact && (
              <div className="grid grid-cols-2 gap-6 mt-12.5">
                <div className="bg-[#FFFCFA] p-5 border-2 border-[#262626] rounded-lg flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FFF5F0] flex items-center justify-center border-2 border-[#262626] rounded-lg">
                    <Image src={icons.mail} alt="mail icon" />
                  </div>
                  <div className="text-[20px] font-medium text-[#262626]">
                    hello@littlelearners.com
                  </div>
                </div>
                <div className="bg-[#FFFCFA] p-5 border-2 border-[#262626] rounded-lg flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FFF5F0] flex items-center justify-center border-2 border-[#262626] rounded-lg">
                    <Image src={icons.phone} alt="mail icon" />
                  </div>
                  <div className="text-[20px] font-medium text-[#262626]">
                    +91 91813 23 2309
                  </div>
                </div>
                <div className="bg-[#FFFCFA] p-5 border-2 border-[#262626] rounded-lg flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FFF5F0] flex items-center justify-center border-2 border-[#262626] rounded-lg">
                    <Image src={icons.location} alt="mail icon" />
                  </div>
                  <div className="text-[20px] font-medium text-[#262626]">
                    Somewhere in the World
                  </div>
                </div>
                <div className="bg-[#FFFCFA] p-5 border-2 border-[#262626] rounded-lg flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FFF5F0] flex items-center justify-center border-2 border-[#262626] rounded-lg">
                    <Image src={icons.clock} alt="mail icon" />
                  </div>
                  <div className="text-[20px] font-medium text-[#262626]">
                    Office Hours - 9am - 6 pm
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
