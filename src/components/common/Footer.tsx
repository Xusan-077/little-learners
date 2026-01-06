import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-455 mx-auto px-5">
        <div className="p-[100px_113px_40px_113px] bg-white border-2 border-[#262626] shadow-[6px_6px_0_2px_#1E1E1E] rounded-lg">
          <div className="grid grid-cols-[1fr_2fr] justify-between gap-20 border-b-2 border-b-[#262626] pb-12.5 mb-12.5">
            <div className="">
              <div className="mb-12.5">
                <Image src={images.logo} alt="website logo" className="mb-5" />
                <p className="text-[20px] text-[#4C4C4D] font-medium">
                  We believe in the power of play to foster creativity,
                  problem-solving skills, and imagination.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FFF5F0] flex items-center justify-center border-2 border-[#262626] rounded-lg">
                    <Image src={icons.mail} alt="mail icon" />
                  </div>
                  <div className="text-[20px] font-medium text-[#262626]">
                    hello@littlelearners.com
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FFF5F0] flex items-center justify-center border-2 border-[#262626] rounded-lg">
                    <Image src={icons.phone} alt="mail icon" />
                  </div>
                  <div className="text-[20px] font-medium text-[#262626]">
                    +91 91813 23 2309
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FFF5F0] flex items-center justify-center border-2 border-[#262626] rounded-lg">
                    <Image src={icons.location} alt="mail icon" />
                  </div>
                  <div className="text-[20px] font-medium text-[#262626]">
                    Somewhere in the World
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4">
              <div className="">
                <h3 className="text-[20px] font-semibold text-[#262626] mb-6">
                  Home
                </h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="#benefits"
                    className="text-[20px] font-medium text-[#333333] cursor-pointer"
                  >
                    Features
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-[20px] font-medium text-[#333333] cursor-pointer"
                  >
                    Our Testimonials
                  </Link>
                  <Link
                    href="#faq"
                    className="text-[20px] font-medium text-[#333333] cursor-pointer"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
              <div className="">
                <h3 className="text-[20px] font-semibold text-[#262626] mb-6">
                  About Us
                </h3>
                <div className="flex flex-col gap-3">
                  <span className="text-[20px] font-medium text-[#333333] cursor-pointer">
                    Our Mission
                  </span>
                  <span className="text-[20px] font-medium text-[#333333] cursor-pointer">
                    Our Vission
                  </span>
                  <span className="text-[20px] font-medium text-[#333333] cursor-pointer">
                    Awards and Recognitions
                  </span>
                  <span className="text-[20px] font-medium text-[#333333] cursor-pointer">
                    History
                  </span>
                  <span className="text-[20px] font-medium text-[#333333] cursor-pointer">
                    Teachers
                  </span>
                </div>
              </div>
              <div className="">
                <h3 className="text-[20px] font-semibold text-[#262626] mb-6">
                  Academics
                </h3>
                <div className="flex flex-col gap-3">
                  <span className="text-[20px] font-medium text-[#333333] cursor-pointer">
                    Special Features
                  </span>
                  <span className="text-[20px] font-medium text-[#333333] cursor-pointer">
                    Gallery
                  </span>
                </div>
              </div>
              <div className="">
                <h3 className="text-[20px] font-semibold text-[#262626] mb-6">
                  Contact Us
                </h3>
                <div className="flex flex-col gap-3">
                  <span className="text-[20px] font-medium text-[#333333] cursor-pointer">
                    Information
                  </span>
                  <span className="text-[20px] font-medium text-[#333333] cursor-pointer">
                    Map & Direction
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-b-2 border-b-[#262626] pb-12.5 mb-12.5">
            <div className="flex items-center">
              <span className="text-[18px] font-medium text-[#333333] pr-4 border-r-2 border-r-[#262626]">
                Terms of Service
              </span>
              <span className="text-[18px] font-medium text-[#333333] pr-4 pl-4 border-r-2 border-r-[#262626]">
                Privacy Policy
              </span>
              <span className="text-[18px] font-medium text-[#333333] pl-2">
                Cookie Policy
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-[#FFDECC] cursor-pointer w-14 h-14 border-2 border-[#262626] rounded-lf flex items-center justify-center rounded-lg">
                <Image src={icons.facebook} alt="facebook icon" />
              </button>
              <button className="bg-[#FFDECC] cursor-pointer w-14 h-14 border-2 border-[#262626] rounded-lf flex items-center justify-center rounded-lg">
                <Image src={icons.twitter} alt="twitter icon" />
              </button>
              <button className="bg-[#FFDECC] cursor-pointer w-14 h-14 border-2 border-[#262626] rounded-lf flex items-center justify-center rounded-lg">
                <Image src={icons.linkedin} alt="linkedin icon" />
              </button>
            </div>
          </div>
          <div className="">
            <p className="text-center text-[18px] font-medium text-[#656567">
              Copyright © [2026] Little Learners Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
