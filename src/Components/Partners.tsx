import { useNavigate } from "react-router-dom";


export default function Partners() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div className="bg-[#1B262F] px-[2.4rem] py-[8rem] mt-[8rem] md:px-[16rem] flex flex-col gap-[5.6rem] relative overflow-hidden xl:flex-row-reverse xl:px-[16.5rem] xl:gap-[20rem]">
      <div className="w-[78rem] h-[78rem] bg-[#1F2C38] rounded-full absolute top-[-60rem] left-[50%] translate-x-[-50%] xl:translate-x-0 xl:left-[-30rem] xl:top-[-40rem]"></div>
      <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 gap-y-[4rem] gap-x-[4rem] md:grid-cols-3 md:gap-y-[3rem] items-center px-[2.4rem] z-20">
        <img
          src="/images/shared/desktop/tesla.svg"
          alt="logo tesla"
        />
        <img
          src="/images/shared/desktop/microsoft.svg"
          alt="logo microsoft"
        />
        <img
          src="/images/shared/desktop/hewlett-packard.svg"
          alt="logo hp"
        />
        <img
          src="/images/shared/desktop/oracle.svg"
          alt="logo oracle"
        />
        <img
          src="/images/shared/desktop/google.svg"
          alt="logo google"
        />
        <img
          src="/images/shared/desktop/nvidia.svg"
          alt="logo nvidia"
        />
      </div>
    </div>

      <div className="text-center z-10 xl:text-start xl:w-[45%]">
        <h2 className="text-[3.2rem] text-[#FBFCFE] font-serif">
          Who we work with
        </h2>
        <p className="text-[#FBFCFE] opacity-[0.7] text-[1.5rem] mt-[2.4rem]">
          Today, millions of people around the world have successfully
          connected their accounts to apps they love using our API. We
          provide developers with the tools they need to create easy
          and accessible experiences for their users.{" "}
        </p>

        <button
          className="text-[#FBFCFE] font-bold text-[1.5rem] py-[1.6rem] px-[3.2rem] border-[#FBFCFE] border-[1px] rounded-[24px] mt-[6rem] xl:mt-[3.2rem] xl:hover:bg-[#FBFCFE] xl:hover:text-[#1B262F] transition-colors duration-300"
          onClick={handleNavigate}
        >
          About us
        </button>
      </div>
    </div>
  );
}
