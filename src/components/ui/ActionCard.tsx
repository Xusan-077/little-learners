import Image from "next/image";

interface Props {
  image: any;
  title: string;
  description: string;
}

export default function ActionCard({ title, image, description }: Props) {
  return (
    <div className="relative max-[1280px]:p-[60px_40px] border-[#262626] border-2 rounded-lg p-[80px_50px_50px_50px] max-[640px]:p-[50px_40px_30px_30px] bg-white">
      <div className="absolute max-[640px]:w-14 max-[640px]:h-14 -top-8 left-8 bg-[#FFDECC] border-2 border-[#262626] rounded-lg w-18.5 h-18.5 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          className="max-[640px]:h-6  max-[640px]:w-6"
        />
      </div>
      <div className="">
        <h3 className="max-[640px]:text-[22px] text-[28px] font-bold text-[#1A1A1A] mb-5 max-[640px]:mb-4">
          {title}
        </h3>
        <p className="text-[20px] max-[640px]:text-[16px] font-medium text-[#4C4C4D]">
          {description}
        </p>
      </div>
    </div>
  );
}
