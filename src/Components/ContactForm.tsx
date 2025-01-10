import { Checkbox } from "@material-tailwind/react";
import { useState } from "react";
import Confirmation from "./Confirmation";

export default function ContactForm() {
  const [userName, setUserName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isUserNameValid, setIsUserNameValid] = useState<boolean>(true);
  const [isEmailAddressValid, setIsEmailAddressValid] = useState<boolean>(true);
  const [isCompanyNameValid, setIsCompanyNameValid] = useState<boolean>(true);
  const [isTitleValid, setIsTitleValid] = useState<boolean>(true);
  const [isMessageValid, setIsMessageValid] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false); // Control dialog visibility

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = () => {
    const userNameValid = userName.trim() !== "";
    const emailAddressValid = emailAddress.trim() !== "" && validateEmail(emailAddress);
    const companyNameValid = companyName.trim() !== "";
    const titleValid = title.trim() !== "";
    const messageValid = message.trim() !== "";

    setIsUserNameValid(userNameValid);
    setIsEmailAddressValid(emailAddressValid);
    setIsCompanyNameValid(companyNameValid);
    setIsTitleValid(titleValid);
    setIsMessageValid(messageValid);

    if (userNameValid && emailAddressValid && companyNameValid && titleValid && messageValid) {
      setOpen(true); // Show confirmation dialog
    }
  };

  const handleDialogClose = () => {
    setOpen(false); // Close confirmation dialog
  };

  return (
    <div>
      <div>
        <h2 className="text-[3.2rem] text-[#36536B] font-serif text-center leading-[3.6rem] md-text-[4.8rem] xl:text-[5.6rem] xl:leading-[5.6rem]">
          Submit a help request and we’ll get in touch shortly.
        </h2>

        <div className="mt-[2.4rem]">
          <div>
            <input
              type="text"
              id="userName"
              name="userName"
              className={`${
                !isUserNameValid
                  ? "border-red-600 text-red-600"
                  : "border-[#92A3B1] text-[#36536B]"
              } border-b-[1px] w-full outline-none px-[2rem] py-[1.6rem] text-[1.5rem] bg-transparent`}
              placeholder="Name"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              className={`${
                !isEmailAddressValid
                  ? "border-red-600 text-red-600"
                  : "border-[#92A3B1] text-[#36536B]"
              } border-b-[1px] w-full outline-none px-[2rem] py-[1.6rem] text-[1.5rem] bg-transparent`}
              placeholder="Email Address"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <input
              type="text"
              id="companyName"
              name="companyName"
              className={`${
                !isCompanyNameValid
                  ? "border-red-600 text-red-600"
                  : "border-[#92A3B1] text-[#36536B]"
              } border-b-[1px] w-full outline-none px-[2rem] py-[1.6rem] text-[1.5rem] bg-transparent`}
              placeholder="Company Name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              type="text"
              id="title"
              name="title"
              className={`${
                !isTitleValid
                  ? "border-red-600 text-red-600"
                  : "border-[#92A3B1] text-[#36536B]"
              } border-b-[1px] w-full outline-none px-[2rem] py-[1.6rem] text-[1.5rem] bg-transparent`}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name="message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className={`${
                !isMessageValid
                  ? "border-red-600 text-red-600"
                  : "border-[#92A3B1] text-[#36536B]"
              } border-b-[1px] w-full outline-none px-[2rem] py-[1.6rem] text-[1.5rem] bg-transparent resize-none`}
            ></textarea>
          </div>

          <div className="flex gap-[2.6rem] mt-[2.4rem] items-center">
            <Checkbox
              color="pink"
              className="w-[2.4rem] h-[2.4rem] rounded-none border-none bg-[#92A3B1]" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}            />
            <p className="text-[#36536B] text-[1.5rem]">
              Stay up-to-date with company announcements and updates to our API
            </p>
          </div>
          <button
            className="text-[#36536B] text-[1.5rem] font-bold py-[1.6rem] px-[4.8rem] border-[1px] border-[#36536B] rounded-[2.4rem] mt-[2.4rem] xl:hover:bg-[#36536B] xl:hover:text-[#FBFCFE] transition-colors duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <Confirmation open={open} handleOpen={handleDialogClose} />
    </div>
  );
}
