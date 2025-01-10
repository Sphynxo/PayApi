export default function Benefits() {
  return (
    <div className="px-[2.4rem] py-[8rem] md:px-[9.8rem] xl:px-[16.5rem] md:py-[10rem] xl:py-[15rem] relative overflow-x-hidden">
      <div className="absolute w-[78rem] h-[78rem] bg-[#D2DBE3] rounded-full bottom-0 right-[-40rem] -z-10 hidden xl:block"></div>
      <div className=" flex flex-col gap-[4.8rem] xl:flex-row xl:items-center xl:gap-[12rem] xl:pr-[10rem]">
        <div className="flex justify-center xl:justify-start xl:w-[50%]">
          <img
            src="/images/home/desktop/easy-to-implement.png"
            alt="illustration easy to implement"
            className="w-full md:w-[39rem] xl:w-full"
          />
        </div>
        <div className="text-center xl:text-start xl:w-[50%]">
          <h2 className="font-serif text-[#36536B] text-[3.6rem] md:text-[4.8rem]">
            Easy to implement
          </h2>
          <p className="text-[1.5rem] text-[#6C8294] mt-[2.4rem]">
            Our API comes with just a few lines of code. You’ll be up
            and running in no time. We built our documentation page to
            integrate payments functionality with ease.
          </p>
        </div>
      </div>

      <div className=" flex flex-col gap-[4.8rem] mt-[8rem] xl:flex-row-reverse xl:items-center xl:gap-[9rem] xl:mt-[15rem]">
        <div className="flex justify-center xl:w-[50%]">
          <img
            src="/images/home/desktop/simple-ui.png"
            alt="illustrations simple ui"
            className="w-full md:w-[36rem] xl:w-full"
          />
        </div>
        <div className="text-center xl:w-[50%] xl:text-start ">
          <h2 className="font-serif text-[#36536B] text-[3.6rem] md:text-[4.8rem]">
            Simple UI & UX
          </h2>
          <p className="text-[1.5rem] text-[#6C8294] mt-[2.4rem]">
            Our pre-built form is easy to integrate in your app or
            website’s checkout flow and designed to optimize
            conversion.
          </p>
        </div>
      </div>
    </div>
  );
}
