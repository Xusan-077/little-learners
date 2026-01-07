import StudentCard from "@/components/ui/StudentCard";
import TopTitle from "@/components/ui/TopTitle";
import { EventsData } from "@/constants";
import Image from "next/image";

export default function StudentCelebrations() {
  return (
    <section>
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
            title="Events & Celebrations"
            type="Our Features"
          />
          <div className="grid grid-cols-3 gap-12.5 max-[1200px]:grid-cols-2 max-[640px]:grid-cols-1">
            {EventsData.map((el) => (
              <StudentCard {...el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
