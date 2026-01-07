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
          <div className="grid grid-cols-3 gap-x-12.5 max-[1320px]:grid-cols-2 max-[800px]:grid-cols-1">
            {AdmissionSteps.map((el) => {
              const first = el.id == 1;

              return (
                <div
                  key={el.id}
                  className="relative mb-25 max-[800px]:mb-15 max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center"
                >
                  <div className="mb-19 border-2 border-[#262626] shadow-[6px_6px_2px_0_#1E1E1E] bg-white rounded-lg w-35 h-26 flex items-center justify-center">
                    <span className="text-[60px] font-extrabold text-[#1A1A1A]">
                      {el.stepNumber}
                    </span>
                  </div>
                  <div className="">
                    <div className="max-[800px]:left-1/2 max-[800px]:translate-x-[-50%] absolute top-23.5 left-16.5 w-5 h-5 bg-white rounded-full border-2 border-[#262626]"></div>
                    <div className="max-[800px]:left-1/2 max-[800px]:translate-x-[-50%]  absolute top-26 left-17.5 -z-1 h-19 bg-[#FFBE99] w-3"></div>

                    {!first && (
                      <div className="hidden max-[800px]:block max-[800px]:left-1/2 -top-24 max-[800px]:translate-x-[-50%]  absolute left-17.5 -z-1 h-25 bg-[#FFBE99] w-3"></div>
                    )}
                  </div>
                  <div className="max-[1320px]:p-10  border-2 border-[#262626] shadow-[6px_6px_2px_0_#1E1E1E] bg-white rounded-lg p-12.5">
                    <h3 className="text-[40px] max-[640px]:text-[26px] max-[640px]:min-h-15 min-h-30 font-bold text-[#1A1A1A]">
                      {el.title}
                    </h3>
                    <p className="text-[20px] max-[640px]:text-[16px] max-[640px]:min-h-auto min-h-50 font-medium text-[#4C4C4D]">
                      {el.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
