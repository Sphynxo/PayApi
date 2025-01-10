import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({
  setCurrentPage,
  currentPage,
}: {
  setCurrentPage: (pageName: string) => void;
  currentPage: string;
}) => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = ["Pricing", "About", "Contact"];

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogoClick = () => {
    navigate("/");
    setCurrentPage("Home");
  };


  return (
    <div className="font-public px-[2.4rem] pt-[4rem] md:flex md:items-center  md:px-[4rem] md:pt-[4.4rem] md:gap-[6.4rem] xl:px-[16.5rem] bg-transparent">
      <div className="flex items-center justify-between">
        <div
          onClick={handleLogoClick}
          className="w-[13.5rem] cursor-pointer"
        >
          <img src="/images/logo.svg" alt="payapi logo" />
        </div>
        <div className="md:hidden">
          <img
            src="/images/open-menu.svg"
            alt="open menu"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div
        className={`fixed bg-[#1B262F] w-[80%] h-screen top-0 px-[2.4rem] py-[4.8rem] md:py-0 ${
          openMenu ? "right-0" : "right-[-100%]"
        } transition-right duration-500 md:static md:bg-transparent md:h-auto md:w-full z-30`}
      >
        <div className="w-full flex justify-end md:hidden">
          <img
            src="/images/close-menu.svg"
            alt="close menu"
            onClick={toggleMenu}
          />
        </div>
        <div className="w-full h-[1px] bg-[#FBFCFE] opacity-[0.15] mt-[2.4rem] md:hidden"></div>
        <nav className="text-[#FBFCFE] text-[2rem] font-bold flex flex-col items-center mt-[4.4rem] gap-[3.2rem] md:text-[#36536B] md:flex-row md:mt-0 md:justify-between md:w-full">
          <ul className="flex flex-col gap-[3.2rem] items-center opacity-[0.7] md:flex-row">
            {navLinks.map((link, index) => (
              <li
                onClick={() => {
                  openMenu ? setOpenMenu(false) : null;
                  setCurrentPage(link);
                }}
                className={`md:opacity-[0.7] xl:hover:opacity-[1] transition-all duration-200 ${
                  link.toLowerCase() === currentPage.toLowerCase()
                    ? "md:opacity-[1]"
                    : ""
                }`}
                key={index}
              >
                <Link to={`/${link.toLowerCase()}`}>{link}</Link>
              </li>
            ))}
          </ul>
          <button className="text-[1.5rem] w-full py-[1.6rem] bg-[#BA4270] rounded-[2.4rem] md:text-[#FBFCFE] md:px-[2.4rem] md:w-auto xl:hover:bg-[#DA6D97] transition-colors duration-300 shadow-custom">
            Schedule a demo
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
