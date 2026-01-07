interface Props {
  type: string;
  title: string;
  description: string;
}

export default function TopTitle({ title, description, type }: Props) {
  return (
    <div className="flex flex-col items-center mb-25 max-[640px]:mb-12.5">
      <span className="max-[640px]:text-[14px] max-[640px]:p-[8px_14px] bg-white p-[10px_20px] mb-5 max-[640px]:mb-2 font-medium text-[18px] border-2 border-[#262626] rounded-lg">
        {type}
      </span>
      <h2 className="max-[640px]:text-[38px] text-center text-[58px] font-bold text-[#1a1a1a]">
        {title}
      </h2>
      <p className="max-[640px]:text-[16px] max-w-250 text-center text-[20px] font-medium text-[#333333]">
        {description}
      </p>
    </div>
  );
}
