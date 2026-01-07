"use client";

import TopTitle from "@/components/ui/TopTitle";
import { icons } from "@/constants/icons";
import Image from "next/image";

export default function ContactInformation() {
  return (
    <section className="">
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
            title="Student Information"
            type="Contact Form"
          />
          <div className="relative max-[1280px]:p-[100px_80px] max-[768px]:p-[50px_30px_30px_30px] border-2 border-[#262A37] rounded-lg p-[120px_100px] bg-white shadow-[8px_8px_0_1px_#1E1E1E]">
            <form onSubmit={(e) => e.preventDefault()} className="">
              <div className="grid grid-cols-2 gap-12.5 mb-12.5  max-[750px]:grid-cols-1  max-[750px]:gap-y-7.5">
                <label className="flex flex-col">
                  <span className="text-[22px] font-semibold mb-5 text-[#4C4C4C]">
                    Parent Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Parent Name"
                    className="border-2 border-[#262626] h-22.5 text-[20px] font-medium outline-none p-[0_30px] rounded-lg bg-[#FFFCFA]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-[22px] font-semibold mb-5 text-[#4C4C4C]">
                    Email Address
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="border-2 border-[#262626] h-22.5 text-[20px] font-medium outline-none p-[0_30px] rounded-lg bg-[#FFFCFA]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-[22px] font-semibold mb-5 text-[#4C4C4C]">
                    Phone Number
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="border-2 border-[#262626] h-22.5 text-[20px] font-medium outline-none p-[0_30px] rounded-lg bg-[#FFFCFA]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-[22px] font-semibold mb-5 text-[#4C4C4C]">
                    Student Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Student Name"
                    className="border-2 border-[#262626] h-22.5 text-[20px] font-medium outline-none p-[0_30px] rounded-lg bg-[#FFFCFA]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-[22px] font-semibold mb-5 text-[#4C4C4C]">
                    Student Age
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Student Age"
                    className="border-2 border-[#262626] h-22.5 text-[20px] font-medium outline-none p-[0_30px] rounded-lg bg-[#FFFCFA]"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-[22px] font-semibold mb-5 text-[#4C4C4C]">
                    Program of Intrest
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Program of Intrest"
                    className="border-2 border-[#262626] h-22.5 text-[20px] font-medium outline-none p-[0_30px] rounded-lg bg-[#FFFCFA]"
                  />
                </label>
              </div>
              <div className="mb-12.5">
                <label className="flex flex-col">
                  <span className="text-[22px] font-semibold mb-5 text-[#4C4C4C]">
                    Message
                  </span>
                  <textarea
                    placeholder="Enter your Message"
                    className="border-2 resize-none border-[#262626] h-54.5 text-[20px] font-medium outline-none p-7.5 rounded-lg bg-[#FFFCFA]"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#FFAE80] p-[30px_0] w-full border-2 cursor-pointer border-[#262626] rounded-lg text-[24px] font-medium text-[#262626]"
              >
                Submit
              </button>
            </form>
            <div className="absolute -top-7 left-[50%] translate-x-[-50%] flex items-center gap-3">
              <button className="bg-[#FFDECC] cursor-pointer max-[640px]:w-18 max-[640px]:h-14 w-37.5 h-14 border-2 border-[#262626] rounded-lf flex items-center justify-center rounded-lg">
                <Image src={icons.facebook} alt="facebook icon" />
              </button>
              <button className="bg-[#FFDECC] cursor-pointer max-[640px]:w-18 max-[640px]:h-14 w-37.5 h-14 border-2 border-[#262626] rounded-lf flex items-center justify-center rounded-lg">
                <Image src={icons.twitter} alt="twitter icon" />
              </button>
              <button className="bg-[#FFDECC] cursor-pointer max-[640px]:w-18 max-[640px]:h-14 w-37.5 h-14 border-2 border-[#262626] rounded-lf flex items-center justify-center rounded-lg">
                <Image src={icons.linkedin} alt="linkedin icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
