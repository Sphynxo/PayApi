import { useState } from "react";
import Confirmation from "./Confirmation";

export default function Schedule() {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setisEmailValid] = useState<boolean>(true);
  const [isFieldEmpty, setIsFieldEmpty] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit() {
    if (!email) {
      setIsFieldEmpty(true);
      setisEmailValid(true);
      return;
    } else {
      setIsFieldEmpty(false);
    }

    const isValid = validateEmail(email);
    setisEmailValid(isValid);

    if (isValid) {
      setEmail("");
      handleOpen();
    }
  }

  return (
    <div>
      <div className="md:relative">
        <Confirmation open={open} handleOpen={handleOpen} />
        <input
          type="text"
          placeholder="Enter email address"
          className={`w-full text-[1.5rem] py-[1.6rem] px-[2.8rem] bg-[#FBFCFE] rounded-[2.4rem] shadow-custom outline-none text-[#36536B] font-bold font-public ${
            !isEmailValid || isFieldEmpty
              ? "border-[2px] border-red-600"
              : "border-[2px] border-transparent"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full text-[1.5rem] py-[1.6rem] bg-[#BA4270] text-[#FBFCFE] font-bold rounded-[2.4rem] mt-[1.6rem] md:absolute md:mt-0 md:h-full md:top-0 md:right-0 md:px-[2.4rem] md:w-[20rem] xl:hover:bg-[#DA6D97] transition-colors duration-300"
          onClick={handleSubmit}
        >
          Schedule a Demo
        </button>
      </div>
      <div className="">
        <p
          className={`text-[1.2rem] text-red-600 font-medium px-[2.8rem] text-start ${
            isFieldEmpty ? "block mt-[1.2rem]" : "hidden"
          }`}
        >
          This field cannot be empty!
        </p>

        <p
          className={`text-[1.2rem] text-red-600 font-medium px-[2.8rem] text-start ${
            !isEmailValid ? "block mt-[1.2rem]" : "hidden"
          }`}
        >
          Oops, that does not look like an email!
        </p>
      </div>
    </div>
  );
}
