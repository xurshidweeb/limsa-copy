import React from "react";
import comp from "../assets/compy.png"
import { useTranslation } from "react-i18next";

function Home() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
  return (
    <div className="">
      <div className="bg-gradient-to-r pt-[60px]  px-5 text-white  from-[#262743] to-[#121212]">
        <div className="container flex justify-between pb-20 pt-10 max-[750px]:flex-col gap-8 items-center ">
          <div className="w-[45%] max-[750px]:w-[90%] max-[750px]:text-center">
            <h2 className="font-bold text-3xl mb-5 max-[750px]:text-2xl ">
              {t("home.title")}
            </h2>
            <p className=" mb-4 max-[750px]:text-sm">
            {t("home.text")}

            </p>
            <a href="#" className="max-[750px]:text-sm text-xl  px-4 py-1 bg-[#6C2DBA] border-2 border-[#6C2DBA] hover:bg-transparent rounded-md">
            {t("home.btn")}

            </a>
          </div>
          <img  src={comp} alt="" className="w-[55%] max-[750px]:w-[90%]" />
        </div>
      </div>
    </div>
  );
}

export default Home;
