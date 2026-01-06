"use client";

import TopTitle from "@/components/ui/TopTitle";
import { FAQData } from "@/constants";
import { icons } from "@/constants/icons";
import Image from "next/image";
import { useState } from "react";

export default function HomeQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24">
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
            title="Frequently Asked Questions"
            type="Solutions For The Doubts"
          />
          <div className="grid grid-cols-2 gap-x-12.5 items-start">
            <div className="flex flex-col gap-y-7.5">
              {FAQData.slice(0, 4).map((el) => (
                <div
                  key={el.id}
                  className={`${
                    openIndex == el.id ? "bg-white" : "bg-[#FFEFE5]"
                  } p-[37px_40px] transition-all duration-300 overflow-hidden border-2 border-[#262626] rounded-lg`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] text-[#262626] font-semibold">
                      {el.question}
                    </h3>
                    <button
                      onClick={() =>
                        el.id == openIndex
                          ? setOpenIndex(null)
                          : setOpenIndex(el.id)
                      }
                      className="bg-[#FFF5F0] w-10  cursor-pointer h-10 border-2 border-[#262626] rounded-lg flex justify-center items-center"
                    >
                      <Image src={icons.plus} alt="plus icon" className="" />
                    </button>
                  </div>
                  {openIndex === el.id && (
                    <div className="pb-6 pt-2 mt-4 border-t-2 border-[#262626]">
                      <p className="text-[#4C4C4C] leading-relaxed">
                        {el.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-7.5">
              {FAQData.slice(4, 7).map((el) => (
                <div
                  key={el.id}
                  className={`${
                    openIndex == el.id ? "bg-white" : "bg-[#FFEFE5]"
                  } p-[37px_40px] transition-all duration-300 overflow-hidden border-2 border-[#262626] rounded-lg`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] text-[#262626] font-semibold">
                      {el.question}
                    </h3>
                    <button
                      onClick={() =>
                        el.id == openIndex
                          ? setOpenIndex(null)
                          : setOpenIndex(el.id)
                      }
                      className="bg-[#FFF5F0] w-10  cursor-pointer h-10 border-2 border-[#262626] rounded-lg flex justify-center items-center"
                    >
                      <Image src={icons.plus} alt="plus icon" className="" />
                    </button>
                  </div>
                  {openIndex === el.id && (
                    <div className="pb-6 pt-2 mt-4 border-t-2 border-[#262626]">
                      <p className="text-[#4C4C4C] leading-relaxed">
                        {el.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
