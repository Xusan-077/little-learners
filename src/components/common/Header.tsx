"use client";

import { NavLinks } from "@/constants";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [showHeader, setShowHeader] = useState(true);
  const lastScroll = useRef(0);
  const [burgerShown, setBurgerShown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (burgerShown) return;

      if (currentScroll > lastScroll.current && currentScroll > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [burgerShown]);

  return (
    <header
      className={`${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 z-50 w-full transition-all duration-300 pt-4 mb-20 max-[640px]:mb-12.5`}
    >
      <div className="max-w-455 mx-auto px-5">
        <div className="flex bg-white justify-between max-[640px]:h-15.5 h-20 border-2 border-[#262626] rounded-lg overflow-hidden">
          <div className="bg-[#FF8D4D] h-full flex items-center p-[0_24px] max-[640px]:p-[0_20px] border-r-2 border-r-[#262626]">
            <Link href="/">
              <Image
                src={images.logo}
                alt="logo"
                className="max-[640px]:w-35 max-[640px]:h-7.5 w-45 h-10"
              />
            </Link>
          </div>
          <nav className="h-full flex items-center max-[1150px]:hidden">
            {NavLinks.map((el, index) => {
              const isActive = pathname === el.path;
              const isLast = index === NavLinks.length - 1;

              return (
                <Link
                  key={el.label}
                  href={el.path}
                  className={`
          flex items-center h-full px-8 text-lg font-medium transition-colors border-[#262626]
          ${index !== 0 ? "border-l-2" : "border-l-2"}
          
          ${
            isLast
              ? "bg-[#FF8D4D] text-white hover:bg-[#e67e45]"
              : isActive
              ? "bg-[#FFEFE5] text-[#262626]"
              : "bg-white text-[#262626] hover:bg-[#FFF5F0]"
          }
        `}
                >
                  {el.label}
                </Link>
              );
            })}
          </nav>
          <button className="cursor-pointer hidden max-[1150px]:flex max-[1150px]:items-center bg-[#FFEFE5] h-full p-[0_30px] border-l-2 border-l-[#262626]">
            <Image src={icons.burger} alt="burger icon" className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
