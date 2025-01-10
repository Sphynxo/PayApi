import ContactForm from "../Components/ContactForm";
import Schedule from "../Components/Schedule";
export default function Contact() {
  return (
    <div className="px-[2.4rem] md:px-[16rem]">
      <div className="flex flex-col gap-[8rem] pt-[4.8rem] items-center xl:flex-row">
        <ContactForm />
        <div className="flex flex-col items-center">
          <h3 className="font-serif text-[#36536B] text-[3.2rem] opacity-[0.75] text-center ">
            Join the thousands of innovators already building with us
          </h3>

          <div className="grid grid-cols-2 gap-y-[4rem] gap-x-[4rem] md:grid-cols-3 md:gap-y-[3rem] items-center px-[2.4rem] z-20 mt-[3.2rem] xl:w-full">
            <img
              src="/images/shared/desktop/tesla-dark.svg"
              alt="logo tesla"
            />
            <img
              src="/images/shared/desktop/microsoft-dark.svg"
              alt="logo microsoft"
            />
            <img
              src="/images/shared/desktop/hewlett-packard-dark.svg"
              alt="logo hp"
            />
            <img
              src="/images/shared/desktop/oracle-dark.svg"
              alt="logo oracle"
            />
            <img
              src="/images/shared/desktop/google-dark.svg"
              alt="logo google"
            />
            <img
              src="/images/shared/desktop/nvidia-dark.svg"
              alt="logo nvidia"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center my-[8rem]  md:mt-[7.2rem] xl:flex-row xl:justify-between xl:px-[16.5rem] xl:mt-[10rem] xl:items-center">
        <h4 className="font-serif text-[3.2rem] text-[#36536B]">
          Ready to start?
        </h4>
        <div className="mt-[2.4rem] md:relative w-full xl:w-[50%] xl:mt-0">
          <Schedule />
        </div>
      </div>
    </div>
  );
}
