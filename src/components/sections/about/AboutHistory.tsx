import TopTitle from "@/components/ui/TopTitle";
import { History } from "@/constants";

export default function AboutHistory() {
  return (
    <section>
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
            title="Our History"
            type="Our Progressive Journey"
          />
          <div className="max-[1280px]:p-25 max-[640px]:gap-12.5 max-[768px]:p-[50px_20px] border-2 flex flex-col gap-y-25 justify-end items-end iteen border-[#262626] rounded-lg p-37.5 bg-white shadow-[6px_6px_0_2px_#1E1E1E]">
            {History.map((el) => (
              <div
                key={el.id}
                className="items-start flex gap-12.5  max-[640px]:gap-7.5 max-[1024px]:flex-col max-[1024px]:w-full"
              >
                <div className="history-card max-[640px]:p-[20px_25px_20px_100px] max-w-90 border-2 border-[#262626] shadow-[6px_6px_0_2px_#1E1E1E] rounded-lg p-[30px_50px_30px_150px]">
                  <span className="text-[68px] max-[640px]:text-[38px] font-bold text-[#1A1A1A]">
                    {el.year}
                  </span>
                </div>
                <div className="max-w-210">
                  <h3 className="max-[640px]:text-[22px] text-[28px] text-[#1A1A1A] font-medium mb-5">
                    {el.title}
                  </h3>
                  <p className="max-[640px]:text-[16px] text-[20px] font-medium text-[#333333]">
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
