import Image from "next/image";

interface Props {
  image: any;
  title: string;
  description: string;
}

export default function StudentCard({ image, title, description }: Props) {
  return (
    <div className="relative border-2 border-[#262626] bg-white shadow-[6px_6px_0_2px_#1E1E1E] p-8 md:p-12 rounded-xl overflow-hidden group">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-40 md:h-48 bg-[#FFEFE5] rounded-b-2xl border-b-2 border-x-2 border-[#262626] z-0 transition-transform group-hover:scale-110 duration-300"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full h-48 md:h-64 mb-8 flex justify-center items-center overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-[28px] font-extrabold text-[#1A1A1A] mb-4">
            {title}
          </h3>
          <p className="text-base md:text-[18px] font-medium text-[#4C4C4D] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
