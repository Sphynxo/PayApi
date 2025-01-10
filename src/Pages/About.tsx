import Description from "../Components/Description";
import Schedule from "../Components/Schedule";
import Strategy from "../Components/Strategy";

export default function About() {
  return (
    <div className="pb-[8rem]">
      <Description />
      <Strategy />
      <div className="w-full flex flex-col items-center mt-[4.8rem] px-[2.4rem] md:px-[12rem] md:mt-[7.2rem] xl:flex-row xl:justify-between xl:px-[16.5rem] xl:mt-[10rem]">
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
