import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    if (path.includes("/about")) {
      setCurrentPage("About");
    } else if (path.includes("/pricing")) {
      setCurrentPage("Pricing");
    } else if (path.includes("/contact")) {
      setCurrentPage("Contact");
    } else {
      setCurrentPage("Home");
    }
  }, [location]);

  return (
    <div className="relative overflow-x-hidden">
      <div
        className={`absolute w-[78rem] h-[78rem] bg-[#D2DBE3] rounded-full  -z-10 ${
          currentPage === "About" ||
          currentPage === "Pricing" ||
          currentPage === "Contact"
            ? "top-[-64rem] right-[-48rem] md:top-[-46rem] md:right-[-48rem] xl:top-[-52rem] xl:right-[-14rem] xl:translate-x-0"
            : "top-[-55rem] right-[50%] translate-x-[50%] md:top-[-66rem] md:w-[95rem] md:h-[95rem] xl:w-[78rem] xl:h-[78rem] xl:top-[-17rem] xl:right-[-14rem] xl:translate-x-0"
        } transition-transform duration-300`}
      ></div>

      <Header
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Outlet context={{ currentPage }} />
      <Footer />
    </div>
  );
}
