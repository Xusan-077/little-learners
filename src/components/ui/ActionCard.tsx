import Image from "next/image";

interface Props {
  image: any;
  title: string;
  description: string;
}

export default function ActionCard({ title, image, description }: Props) {
  return (
    <div className="relative border-[#262626] border-2 rounded-lg p-[80px_50px_50px_50px] bg-white">
      <div className="absolute -top-8 left-8 bg-[#FFDECC] border-2 border-[#262626] rounded-lg w-18.5 h-18.5 flex items-center justify-center">
        <Image src={image} alt={title} />
      </div>
      <div className="">
        <h3 className="text-[28px] font-bold text-[#1A1A1A] mb-5">{title}</h3>
        <p className="text-[20px] font-medium text-[#4C4C4D]">{description}</p>
      </div>
    </div>
  );
}
