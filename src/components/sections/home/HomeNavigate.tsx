import TopTitle from "@/components/ui/TopTitle";
import { Navigate } from "@/constants";
import { icons } from "@/constants/icons";
import Image from "next/image";
import Link from "next/link";

export default function HomeNavigate() {
  return (
    <section id="navigate">
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
            title="Navigate through our Pages"
            type="Explore More"
          />
          <div className="grid grid-cols-2 gap-12.5 max-[1150px]:grid-cols-1">
            {Navigate.map((el) => (
              <div
                key={el.id}
                className="bg-white max-[640px]:p-10 border-2 border-[#262626] p-20 rounded-lg shadow-[6px_6px_0_2px_#1E1E1E]"
              >
                <div className="">
                  <h2 className="text-center max-[640px]:text-[28px] text-[48px] font-bold mb-7.5 text-[#1A1A1A]">
                    {el.title}
                  </h2>
                  <p className="text-center mb-20 max-[640px]:text-[16px] max-[640px]:mb-10 text-[20px] font-medium text-[#4C4C4D]">
                    {el.description}
                  </p>
                  <Link
                    href={el.link}
                    className="bg-[#FFDECC] p-[18px_0] max-[640px]:p-[16px_0] focus:shadow-none  w-full shadow-[4px_4px_0_2px_#1E1E1E] rounded-lg border-2 border-[#262626] flex items-center gap-2 justify-center"
                  >
                    <span className="text-[20px] max-[640px]:text-[16px] font-medium text-[#333333]">
                      Learn More
                    </span>
                    <Image
                      src={icons.arrow}
                      alt="arrow icon"
                      className="rotate-180"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
