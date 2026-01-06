import { Testimonials } from "@/constants";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef } from "react";

export default function HomeTestimonialsCorusel() {
  const splideRef = useRef<any>(null);

  return (
    <div className="flex items-center gap-[62px] carousel-container">
      <button
        onClick={() => splideRef.current?.splide.go("<")}
        className="shrink-0 cursor-pointer p-4 border-2 bg-white border-[#333333] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
      >
        <Image src={icons.arrow} alt="left arrow" width={30} height={30} />
      </button>

      <div className="flex-1 overflow-hidden">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 3,
            autoplay: true,
            gap: "50px",
            arrows: false,
            pagination: false,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          {Testimonials.map((el) => (
            <SplideSlide key={el.name}>
              <div className="bg-white flex flex-col items-center rounded-lg border-2 border-[#262626] shadow-[6px_6px_0_2px_#1E1E1E] p-12">
                <div className="bg-[#FFDECC] w-20 h-20 mb-2 flex items-center justify-center border-2 border-[#262626] rounded-full overflow-hidden">
                  <Image src={el.image} alt={el.name} width={80} height={80} />
                </div>

                <h4 className="text-2xl font-semibold mb-6 text-[#333333]">
                  {el.name}
                </h4>

                <Image
                  src={icons.star}
                  alt="star"
                  width={140}
                  height={24}
                  className="mb-6"
                />

                <p className="text-lg min-h-37.5 font-medium text-[#333333] text-center">
                  {el.description}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <button
        onClick={() => splideRef.current?.splide.go(">")}
        className="shrink-0 cursor-pointer p-4 border-2 bg-white border-[#333333] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
      >
        <Image
          src={icons.arrow}
          alt="right arrow"
          width={30}
          height={30}
          className="rotate-180"
        />
      </button>
    </div>
  );
}
