import Schedule from "./Schedule";

export default function Features() {
  return (
    <div className="px-[2.4rem] pb-[8rem] md:px-[4rem] xl:px-[16.5rem]">
      <div className="flex flex-col items-center gap-[4.8rem] md:flex-row">
        <div className="flex flex-col items-center">
          <img
            src="/images/home/desktop/icon-personal-finances.svg"
            alt="icon personal finances"
          />
          <h3 className="text-[1.8rem] text-[#36536B] font-bold mt-[3.2rem]">
            Personal Finances
          </h3>
          <p className="text-[1.5rem] text-[#6C8294] text-center mt-[1.6rem]">
            Consolidate financial data from multiple sources and
            categorize transactions up to 2 years of history. Analyze
            reports to reconcile activities in your account.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/home/desktop/icon-banking-and-coverage.svg"
            alt="icon banking and coverage"
          />
          <h3 className="text-[1.8rem] text-[#36536B] font-bold mt-[3.2rem]">
            Banking & Coverage
          </h3>
          <p className="text-[1.5rem] text-[#6C8294] text-center mt-[1.6rem]">
            With our platform, you can speed up account onboarding and
            support ongoing payments for checking, savings, credit
            card, and brokerage accounts.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/home/desktop/icon-consumer-payments.svg"
            alt="icon consumer payments"
          />
          <h3 className="text-[1.8rem] text-[#36536B] font-bold mt-[3.2rem]">
            Consumer Payments
          </h3>
          <p className="text-[1.5rem] text-[#6C8294] text-center mt-[1.6rem]">
            It’s easier to set up secure bank payments with us through
            a flow designed with the user experience in mind.
            Customers could instantly authenticate their account.
          </p>
        </div>
      </div>

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
