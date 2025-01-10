
import Plans from "../Components/Plans";
import Schedule from "../Components/Schedule";

export default function Pricing() {

  return (
    <div className="py-[4.8rem] px-[2.4rem] md:px-[4rem] xl:px-[16.5rem]">
      
      <Plans />
      <div className="w-full flex flex-col items-center mt-[8rem] md:px-[12rem] xl:flex-row xl:px-0 xl:justify-between">
        <h4 className="font-serif text-[3.2rem] text-[#36536B]">
          Ready to start?
        </h4>
        <div className="mt-[2.4rem] md:relative w-full xl:w-[50%] xl:mt-0">
          <Schedule  />
        </div>
      </div>
    </div>
  );
}
