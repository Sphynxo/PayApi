import { useState } from "react";
import pricingData from "../Data/pricingData.json";
import Payment from "./Payment";

export default function Plans() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="relative overflow-auto-x-hidden">
      <div>
        <Payment handleOpen={handleOpen} open={open} />
      </div>

      <h1 className="text-[#36536B] text-[3.2rem] font-serif text-center md:text-[4.8rem] xl:text-start xl:text-[5.6rem]">
        Pricing
      </h1>

      <div className="flex flex-col gap-[4.8rem] mt-[4.8rem] md:flex-row md:justify-between">
        {pricingData.map((plan, index) => (
          <div className="text-center xl:text-start" key={index}>
            <h2 className="text-[2.4rem] font-serif text-[#BA4270] xl:text-[3.2rem]">
              {plan.name}
            </h2>
            <p className="text-[1.5rem] text-[#6C8294] leading-[2.8rem] mt-[1.2rem] hidden md:block">
              {plan.description}
            </p>
            <h3 className="text-[5.6rem] text-[#36536B] font-serif mt-[8rem] md:mt-[2rem]">{`$${plan.price}`}</h3>

            <div className="w-full h-[1px] bg-[#36536B] opacity-[0.25] mt-[2.4rem]"></div>
            <div className="flex justify-center">
              <div className="text-start flex flex-col mt-[2.4rem] w-full items-center xl:items-start">
                <div className="flex flex-col gap-[0.8rem] items-start">
                  {plan.features.map((feature, index) => (
                    <div
                      className="flex gap-[2.4rem] items-center "
                      key={index}
                    >
                      <div className="w-[1.2rem] h-[0.8rem] flex items-center justify-center">
                        {feature.included ? (
                          <img
                            src="/images/shared/desktop/icon-check.svg"
                            alt="icon-check"
                          ></img>
                        ) : null}
                      </div>
                      <p
                        className={`text-[1.6rem] text-[#36536B] ${
                          feature.included
                            ? "opacity-1"
                            : "opacity-[0.4]"
                        }`}
                      >
                        {feature.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="w-full h-[1px] bg-[#36536B] opacity-[0.25] mt-[2.4rem] hidden md:block"></div>
                <div>
                  <button
                    className="text-[#36536B] text-[1.5rem] font-bold py-[1.6rem] px-[2.8rem] border-[1px] border-[#36536B] rounded-[2.4rem] mt-[2.4rem] xl:hover:bg-[#36536B] xl:hover:text-[#FBFCFE] transition-colors duration-300"
                    onClick={handleOpen}
                  >
                    Request Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
