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
          <div className="border-2 flex flex-col gap-y-25 justify-end items-end iteen border-[#262626] rounded-lg p-37.5 bg-white shadow-[6px_6px_0_2px_#1E1E1E]">
            {History.map((el) => (
              <div
                key={el.id}
                className="history-card  flex items-center gap-12.5"
              >
                <div className="max-w-90 border-2 border-[#262626] shadow-[6px_6px_0_2px_#1E1E1E] rounded-lg p-[30px_50px_30px_150px]">
                  <span className="text-[68px] font-bold text-[#1A1A1A]">
                    {el.year}
                  </span>
                </div>
                <div className="max-w-210">
                  <h3 className="text-[28px] text-[#1A1A1A] font-medium mb-5">
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
