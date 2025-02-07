import React from "react";
import { useTranslation } from "react-i18next";
import { GiCheckMark } from "react-icons/gi";
import bg from "../assets/pagesbg.png";
import pg from "../assets/prices1.jpg";

function Prices() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    console.log(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="prices bg-no-repeat bg-cover pt-[80px] pb-10 bg-[Url(../assets/pricesbg.jpg)]"
    >
      <div className="container h-full px-5">
        <p className="w-[160px]  text-[#8432e8] py-2 mt-[50px] mb-[50px]  text-center mx-auto rounded-4xl border border-[#8432e8]">
          {t("header.prices")}
        </p>
        <h2 className="pb-[40px] text-center text-[#FFF] text-4xl max-[440px]:text-2xl font-bold">
          {t("pri.title")}
        </h2>
        {/* ---------LANDING PAGE---------- */}
        <div
        style={{ backgroundImage: `url(${pg})` }}
          className="page group bg-cover bg-center w-full h-full rounded-[10px] border border-[#928e8e] 
            hover:border-[#8432e8] md:flex items-center justify-between mb-[5px]"
        >
          <div className="w-[420px] max-[440px]:w-full  h-full p-[30px] md:border-r md:border-[#928e8e] group-hover:border-[#8432e8] max-[768]:bg-[#121212] rounded-l-[10px]">
            <h3 className="text-2xl max-[440px]:text-xl text-[#8432e8] font-bold pb-5">
              {t("pri.page.title")}
            </h3>
            <p className="w-[90%] text-md text-[#928e8e]">
              {t("pri.page.description")}
            </p>
          </div>
          <ul className="p-[30px]">
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.page.text1")}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.page.text2")}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.page.text3")}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.page.text4")}</p>
            </li>
          </ul>
          <div className="lg:flex items-center gap-8 p-[30px]">
            <p className="text-xl text-[#8432e8] font-bold pb-[10px] lg:pb-0">
              {t("pri.page.subtext1")}
            </p>
            <button className="w-[140px] h-[35px] bg-[#8432e8] rounded-lg text-lg text-center font-bold text-[#fff]">
              {t("pri.page.subtext2")}
            </button>
          </div>
        </div>
        {/* --------SITE CARD---------- */}
        <div
        style={{ backgroundImage: `url(${pg})` }}

          className="page group bg-cover bg-center w-full h-full rounded-[10px] border border-[#928e8e]
         hover:border-[#8432e8] md:flex items-center justify-between mb-[5px]"
        >
          <div className="w-[420px] max-[440px]:w-full  h-full p-[30px] md:border-r md:border-[#928e8e] group-hover:border-[#8432e8] max-[768]:bg-[#121212] rounded-l-[10px]">
            <h3 className="text-2xl max-[440px]:text-xl text-[#8432e8] font-bold pb-5">
              {t("pri.card.title")}
            </h3>
            <p className="w-[90%] text-md text-[#928e8e]">
              {t("pri.card.description")}
            </p>
          </div>
          <ul className="p-[30px]">
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.card.text1")}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.card.text2")}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.card.text3")}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.card.text4")}</p>
            </li>
          </ul>

          <div className="lg:flex items-center gap-8 p-[30px]">
            <p className="text-xl text-[#8432e8] font-bold pb-[10px] lg:pb-0">
              {t("pri.card.subtext1")}
            </p>
            <button className="w-[140px] h-[35px] bg-[#8432e8] rounded-lg text-lg text-center font-bold text-[#fff]">
              {t("pri.card.subtext2")}
            </button>
          </div>
        </div>
        {/* ----Exclusive------ */}
        <div
        style={{ backgroundImage: `url(${pg})` }}

          className="page group bg-cover bg-center w-full h-full rounded-[10px] border border-[#928e8e] 
            hover:border-[#8432e8] md:flex items-center justify-between"
        >
          <div className="w-[420px] max-[440px]:w-full  h-full p-[30px] md:border-r md:border-[#928e8e] group-hover:border-[#8432e8] max-[768]:bg-[#121212] rounded-l-[10px]">
            <h3 className="text-2xl max-[440px]:text-xl text-[#8432e8] font-bold pb-5">
              {t("pri.exc.title")}
            </h3>
            <p className="w-[90%] text-md text-[#928e8e]">
              {t("pri.exc.description")}
            </p>
          </div>
          <ul className="p-[30px]">
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.exc.text1")}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.exc.text2")}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.exc.text3")}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <GiCheckMark className="text-[#8432e8]" />
              <p className="text-[#928e8e] text-md">{t("pri.exc.text4")}</p>
            </li>
          </ul>
          <div className="lg:flex items-center gap-8 p-[30px]">
            <p className="text-xl text-[#8432e8] font-bold pb-[10px] lg:pb-0">
              {t("pri.exc.subtext1")}
            </p>
            <button className="w-[140px] h-[35px] bg-[#8432e8] rounded-lg text-lg text-center font-bold text-[#fff]">
              {t("pri.exc.subtext2")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
