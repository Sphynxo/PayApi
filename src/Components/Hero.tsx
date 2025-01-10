import { Link } from "react-router-dom";
import Schedule from "./Schedule";


export default function Hero() {
  return (
    <div className=" mt-[3.2rem] md:mt-[4.8rem] overflow-x-hidden">


      <div className="px-[2.4rem] flex flex-col items-center text-center gap-[2.4rem] md:px-[9.8rem] xl:flex-row-reverse xl:pl-[16.5rem] xl:pr-[26rem] xl:gap-[16rem] xl:text-start">
        <div className="xl:w-[25%]">
          <img
            src="/images/home/desktop/illustration-phone-mockup.png"
            alt="illustration phone mockup"
            className="w-[13rem] md:w-[16rem] xl:w-full"
          />
        </div>
        <div className="xl:w-[75%]">
          <h2 className="text-[3.2rem] font-serif text-[#36536B] leading-[36px] md:text-[4.8rem] xl:text-[7.2rem] xl:leading-[7.2rem]">
            Start building with our APIs for absolutely free.
          </h2>
          <div className="mt-[4rem] md:relative xl:w-[80%]">
            <Schedule />
          </div>
          <p className="text-[1.5rem] text-[#6C8294] mt-[2.4rem] xl:ml-[2.8rem]">
            Have any questions?
            <Link to={"/contact"} className="font-bold ml-[0.8rem]">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
