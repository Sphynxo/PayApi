import { useState } from "react";

function formatCardNumber(value: string) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value: string) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function CheckOutForm({
  handleOpen,
}: {
  handleOpen: () => void;
}) {
  const [cardNumber, setCardNumber] = useState("");
  const [email, setEmail] = useState("");
  const [cardExpires, setCardExpires] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isCardNumberValid, setIsCardNumberValid] = useState(true);
  const [isCardExpiresValid, setIsCardExpiresValid] = useState(true);
  const [isCvcValid, setIsCvcValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = () => {
    const emailValid = email.trim() !== "" && validateEmail(email);
    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, "");
    const cardNumberValid =
      cardNumberWithoutSpaces !== "" &&
      /^\d+$/.test(cardNumberWithoutSpaces);
    const cardExpiresValid = cardExpires.trim() !== "";
    const cvcValid = cvc.trim() !== "" && /^\d+$/.test(cvc);
    const nameValid = name.trim() !== "";

    setIsEmailValid(emailValid);
    setIsCardNumberValid(cardNumberValid);
    setIsCardExpiresValid(cardExpiresValid);
    setIsCvcValid(cvcValid);
    setIsNameValid(nameValid);

    if (
      emailValid &&
      cardNumberValid &&
      cardExpiresValid &&
      cvcValid &&
      nameValid
    ) {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="px-[2.4rem] py-[.4rem] md:px-[4rem] md:py-[4rem]">
      <div
        className={`gap-[3.2rem] ${
          !isConfirmed ? "flex flex-col" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-[3.2rem] md:flex-row md:gap-[2rem] md:justify-between">
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            placeholder="Enter your email"
            className={`w-full border-b-[1px] py-[1.6rem] text-[1.5rem] px-[1.6rem] outline-none font-normal text-[#36536B] focus:border-[#36536B] md:w-[60%] ${
              !isEmailValid
                ? "border-red-600 text-red-600"
                : "border-[#92A3B1] text-[#36536B]"
            }`}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter card number"
            className={`w-full border-b-[1px] py-[1.6rem] text-[1.5rem] px-[1.6rem] outline-none font-normal text-[#36536B] focus:border-[#36536B] md:w-[40%] ${
              !isCardNumberValid
                ? "border-red-600 text-red-600"
                : "border-[#92A3B1] text-[#36536B]"
            }`}
            value={formatCardNumber(cardNumber)}
            onChange={(event) => setCardNumber(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[3.2rem] md:flex-row md:justify-between md:gap-[2rem]">
          <div className="flex gap-[2rem] w-full md:w-[36%]">
            <input
              type="text"
              placeholder="Exp."
              id="exp"
              name="exp"
              maxLength={5}
              value={formatExpires(cardExpires)}
              onChange={(event) => setCardExpires(event.target.value)}
              className={`w-full border-b-[1px] py-[1.6rem] text-[1.5rem] px-[1.6rem] outline-none font-normal text-[#36536B] focus:border-[#36536B] md:w-[46%] ${
                !isCardExpiresValid
                  ? "border-red-600 text-red-600"
                  : "border-[#92A3B1] text-[#36536B]"
              }`}
            />
            <input
              type="text"
              id="cvc"
              name="cvc"
              placeholder="CVC"
              maxLength={3}
              value={cvc}
              onChange={(event) => setCvc(event.target.value)}
              className={`w-full border-b-[1px] py-[1.6rem] text-[1.5rem] px-[1.6rem] outline-none font-normal text-[#36536B] focus:border-[#36536B] md:w-[40%] ${
                !isCvcValid
                  ? "border-red-600 text-red-600"
                  : "border-[#92A3B1] text-[#36536B]"
              }`}
            />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full border-b-[1px] py-[1.6rem] text-[1.5rem] px-[1.6rem] outline-none font-normal text-[#36536B] focus:border-[#36536B] md:w-[64%] ${
              !isNameValid
                ? "border-red-600 text-red-600"
                : "border-[#92A3B1] text-[#36536B]"
            }`}
            placeholder="Cardholder Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex gap-[2rem] justify-end">
          <button
            className="text-[1.2rem] px-[2rem] py-[0.8rem] border-[1px] rounded-[2.4rem] border-[#36536B] text-[#36536B] font-normal xl:hover:bg-[#36536B] xl:hover:text-[#FBFCFE] transition-colors duration-300"
            onClick={handleOpen}
          >
            Cancel
          </button>
          <button
            className="text-[1.2rem] px-[2rem] py-[0.8rem] bg-[#BA4270] rounded-[2.4rem] text-[#FBFCFE] font-normal xl:hover:bg-[#DA6D97] transition-colors duration-300"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
      <div
        className={`${
          isConfirmed
            ? "flex flex-col items-center text-center gap-[4rem]"
            : "hidden"
        } `}
      >
        <img
          src="/images/check.png"
          alt="check icon"
          className="w-[6rem] md:w-[10rem]"
        />
        <h1 className="text-[2rem] md:text-[3.2rem] font-bold font-serif">
          Thank Your For Your Purchase
        </h1>

        <button
          className="w-full text-[1.5rem] py-[1.6rem] bg-[#BA4270] text-[#FBFCFE] font-bold rounded-[2.4rem] mt-[1.6rem]  md:mt-0 md:h-full md:top-0 md:right-0 md:px-[2.4rem] md:w-[20rem] xl:hover:bg-[#DA6D97] transition-colors duration-300"
          onClick={handleOpen}
        >
          Got It!
        </button>
      </div>
    </div>
  );
}
