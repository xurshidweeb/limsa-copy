import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/limsa-logo.png";
import { TiThMenu } from "react-icons/ti";
import { useTranslation } from "react-i18next";

function Header() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Handle scroll

  const [scrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`${
          scrolled ? " from-[#022007] to-[#03142d] shadow-2xl" : " from-[#262743] to-[#121212]"
        } fixed w-full bg-gradient-to-r px-5 text-white `}
      >
        <div className=" container py-5 flex justify-between items-center">
          <div className=" flex items-center">
            <a href="" className="mr-15">
              <img src={logo} alt="" className=" w-[120px]" />
            </a>
            <nav className="flex gap-1 mr-5 max-[916px]:hidden text-white">
              <NavLink
                activeclassName="active"
                className="border-b-2 px-4 border-transparent rounded-xl  "
                to="/"
              >
                {t("header.home")}
              </NavLink>
              <NavLink
                activeclassName="active"
                className="border-b-2 px-4 border-transparent rounded-xl  "
                to="/services"
              >
                {t("header.services")}
              </NavLink>
              <NavLink
                activeclassName="active"
                className="border-b-2 px-4 border-transparent rounded-xl  "
                to="/works"
              >
                {t("header.work")}
              </NavLink>
              <NavLink
                activeclassName="active"
                className="border-b-2 px-4 border-transparent rounded-xl  "
                to="/prices"
              >
                {t("header.prices")}
              </NavLink>
            </nav>
            <select
              name=""
              id=""
              onChange={(e) => changeLanguage(e?.target.value)}
              className=" text-xl border-none outline-none p-0 hover:bg-gray-600 py-1 rounded-md cursor-pointer appearance-none px-2 text-white"
            >
              <option value="uz" className="text-black">
                Uzb
              </option>
              <option value="ru" className="text-black">
                Rus
              </option>
              <option value="eng" className="text-black">
                Eng
              </option>
            </select>
          </div>

          <button className=" max-[500px]:hidden px-4 py-2 border-2 cursor-pointer border-[#6C2DBA] rounded-xl bg-[#6C2DBA] hover:bg-transparent text-white  ">
            +998935138833
          </button>
          <TiThMenu
            onClick={toggleModal}
            className="ml-5 text-2xl max-[870px]:flex hidden cursor-pointer"
          />
        </div>

        {modal ? (
          <nav className="flex flex-col items-center pb-5 mx-auto gap-8 mr-5 text-white">
            <NavLink
              activeclassName="active"
              className="border-2  w-60 py-1 text-center border-transparent rounded-3xl  "
              to="/"
            >
              {t("header.home")}
            </NavLink>
            <NavLink
              activeclassName="active"
              className="border-2  w-60 py-1 text-center border-transparent rounded-3xl  "
              to="/services"
            >
              {t("header.services")}
            </NavLink>
            <NavLink
              activeclassName="active"
              className="border-2  w-60 py-1 text-center border-transparent rounded-3xl  "
              to="/works"
            >
              {t("header.work")}
            </NavLink>
            <NavLink
              activeclassName="active"
              className="border-2  w-60 py-1 text-center border-transparent rounded-3xl  "
              to="/prices"
            >
              {t("header.prices")}
            </NavLink>
          </nav>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
