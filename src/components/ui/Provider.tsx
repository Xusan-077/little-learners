"use client";

import { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="pt-40 max-[640px]:pt-25">{children}</main>
      <Footer />

      <div
        onClick={scrollToTop}
        className={`${
          scroll >= 1000 ? "bottom-5" : "-bottom-30"
        } transition-all flex items-center justify-center z-10000 fixed right-5 text-white cursor-pointer bg-[#FF8D4D] rounded-full text-center max-[425px]:w-15 max-[425px]:h-15  h-20 w-20 p-[10px_0]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="max-[425px]:size-8 size-10"
        >
          <path
            fillRule="evenodd"
            d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
}
