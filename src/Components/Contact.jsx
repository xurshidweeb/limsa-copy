import React from "react";
import bg from "../assets/bg.png"; // Rasmni import qilish
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Contact() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div
      className="h-auto bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <h2 className="text-4xl font-bold text-white pb-6 max-[768px]:text-center max-[768px]:text-2xl">{t("contact.title")}</h2>
            <p className="text-xl text-[#652AAE] pb-6 max-[768px]:text-center max-[768px]:text-sm">{t("contact.text")}</p>
            <div className="flex flex-col gap-3 max-[768px]:items-center ">
              <div className="font-bold text-white text-2xl max-[768px]:text-center"> {t("contact.subtitle")} </div>
              <NavLink className="text-gray-400" to="/">
                {t("contact.home")}
              </NavLink>
              <NavLink className="text-gray-400" to="/services">
                {t("contact.services")}
              </NavLink>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold text-white mb-4 max-[768px]:text-center">{t("contact.title1")}</h2>
            <form action="" className="flex flex-col items-start gap-5 text-white">
              <input type="text" required placeholder={t("contact.input1")} className=" w-full bg-[#363636] outline-none rounded-2xl p-3" />
              <div className=" w-full bg-[#363636] rounded-2xl p-3 focus:scale-102">
                <span className="">+998</span>
              <input type="tell" required placeholder="93 513 88 33" className="outline-none pl-2" />
              </div>
              <textarea name="" placeholder={t("contact.input2")} id="" className=" w-full bg-[#363636] outline-none rounded-2xl p-3 h-25"></textarea>
              <button className="bg-[#652AAE] border-2 border-[#652AAE] hover:bg-transparent py-1 px-9 rounded-2xl cursor-pointer">{t("contact.btn")}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
