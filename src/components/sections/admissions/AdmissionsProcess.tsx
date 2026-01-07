import TopTitle from "@/components/ui/TopTitle";
import { AdmissionSteps } from "@/constants";

export default function AdmissionsProcess() {
  return (
    <section>
      <div className="container">
        <div className="mb-50 max-[640px]:mb-20">
          <TopTitle
            description="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
            title="Admission Process"
            type="Process"
          />
          <div className="grid grid-cols-3 gap-x-12.5">
            {AdmissionSteps.map((el) => (
              <div key={el.id} className="relative mb-25">
                <div className="mb-19 border-2 border-[#262626] shadow-[6px_6px_2px_0_#1E1E1E] bg-white rounded-lg w-35 h-26 flex items-center justify-center">
                  <span className="text-[60px] font-extrabold text-[#1A1A1A]">
                    {el.stepNumber}
                  </span>
                </div>
                <div className="">
                  <div className="absolute top-23.5 left-16.5 w-5 h-5 bg-white rounded-full border-2 border-[#262626]"></div>
                  <div className="absolute top-26 left-17.5 -z-1 h-19 bg-[#FFBE99] w-3"></div>
                </div>
                <div className="border-2 border-[#262626] shadow-[6px_6px_2px_0_#1E1E1E] bg-white rounded-lg p-12.5">
                  <h3 className="text-[40px] font-bold text-[#1A1A1A]">
                    {el.title}
                  </h3>
                  <p className="text-[20px] min-h-37.5 font-medium text-[#4C4C4D]">
                    {el.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
