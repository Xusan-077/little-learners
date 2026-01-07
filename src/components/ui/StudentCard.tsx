import Image from "next/image";

interface Props {
  image: any;
  title: string;
  description: string;
}

export default function StudentCard({ image, title, description }: Props) {
  return (
    <div className="relative border-2 border-[#262626] bg-white shadow-[6px_6px_0_2px_#1E1E1E] p-12.5 rounded-lg">
      <Image src={image} alt={title} className="mb-12.5 relative z-10" />
      <div className="">
        <h3 className="text-[28px] font-bold text-[#1A1A1A] mb-5 text-center">
          {title}
        </h3>
        <p className="text-[20px] font-medium text-[#4C4C4D] text-center">
          {description}
        </p>
      </div>

      <div className="absolute top-0 z-1 left-1/2 -translate-x-1/2 w-31 h-96 bg-[#FFEFE5] rounded-b-xl border-b-2 border-l-2 border-r-2 border-[#262626]"></div>
    </div>
  );
}
