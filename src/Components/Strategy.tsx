export default function Strategy() {
  return (
    <div className="px-[2.4rem] md:px-[4rem] xl:px-[16.5rem]">
      <div className="flex flex-col items-center text-center gap-[3.2rem] py-[1.6rem] mt-[4.8rem] border-t-[1px] border-b-[1px] border-[#C0CBD5] md:border-none md:flex-row justify-between md:text-start">
        <div className="md:border-t-[1px] md:border-b-[1px] md:border-[#C0CBD5] md:py-[1.6rem] md:w-full">
          <div>
            <h4 className="text-[1.6rem] text-[#36536B] opacity-[0.7]">
              Team Members
            </h4>
            <p className="text-[5.6rem] font-serif text-[#BA4270]">
              300+
            </p>
          </div>
        </div>
        <div className="md:border-t-[1px] md:border-b-[1px] md:border-[#C0CBD5] md:py-[1.6rem] md:w-full">
          <div>
            <h4 className="text-[1.6rem] text-[#36536B] opacity-[0.7]">
              Offices in the US
            </h4>
            <p className="text-[5.6rem] font-serif text-[#BA4270]">
              3
            </p>
          </div>
        </div>
        <div className="md:border-t-[1px] md:border-b-[1px] md:border-[#C0CBD5] md:py-[1.6rem] md:w-full">
          <div>
            <h4 className="text-[1.6rem] text-[#36536B] opacity-[0.7]">
              Transactions analyzed
            </h4>
            <p className="text-[5.6rem] font-serif text-[#BA4270]">
              10M+
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[4.8rem] md:mt-[6.4rem] xl:px-[9.5rem]">
        <div className="flex flex-col gap-[1.6rem] items-center text-center md:flex-row md:justify-between md:items-start md:text-start">
          <h3 className="text-[2.4rem] text-[#36536B] font-serif md:text-[3.2rem]">
            The Culture
          </h3>
          <p className="text-[1.5rem] text-[#6C8294] leading-[2.8rem] md:w-[64%]">
            We strongly believe there's always an opportunity to learn
            from each other outside of day-to-day work, whether it's
            company-wide offsites, internal hackathons, or co-worker
            meetups. We always value cross-team collaboration and
            diversity of thought, no matter the job title.
          </p>
        </div>
        <div className="flex flex-col gap-[1.6rem] items-center text-center mt-[4.8rem] md:flex-row md:justify-between md:items-start md:text-start md:mt-[6.4rem]">
          <h3 className="text-[2.4rem] text-[#36536B] font-serif md:text-[3.2rem]">
            The People
          </h3>
          <p className="text-[1.5rem] text-[#6C8294] leading-[2.8rem] md:w-[64%]">
            We're all passionate about building a more efficient and
            inclusive financial infrastructure together. At PayAPI, we
            have diverse backgrounds and skills.
          </p>
        </div>
      </div>
    </div>
  );
}
