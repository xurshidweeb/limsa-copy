import React from "react";
import { useTranslation } from "react-i18next";
import { PiDesktopTowerBold } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";
import { SiBisecthosting } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";

function Services() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <div className="bg-[#161616] pt-30 pb-10">
        <div className="container px-4 flex flex-col items-center">
          <p className="text-center text-white py-2 px-10 rounded-2xl mb-5 border-2 border-[#652AAE]">
            Xizmatlarimiz
          </p>
          <h2 className="text-white text-4xl font-bold w-170 max-[768px]:w-full max-[500px]:text-3xl text-center">
            {t("servic.title1")}
          </h2>
          <h3 className="font-medium text-2xl mt-4 text-[#652AAE]">
            {t("servic.title2")}{" "}
          </h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="flex gap-5 hover:scale-103 bg-[#0c0b0b] p-8 rounded-3xl max-[1024px]:flex-col">
              <div className="flex flex-col max-[1024px]:flex-row justify-between items-center">
                <PiDesktopTowerBold className="text-5xl text-white" />
                <p className="text-white text-4xl font-bold">1</p>
              </div>
              <div className="">
                <h3 className="text-white text-2xl font-medium">
                  {t("servic.subtitle1")}
                </h3>
                <p className="text-gray-400 mt-3">{t("servic.text1")}</p>
              </div>
            </div>
            <div className="flex gap-5 hover:scale-103 bg-[#0c0b0b] p-8 rounded-3xl max-[1024px]:flex-col">
              <div className="flex flex-col max-[1024px]:flex-row justify-between items-center">
                <GrUserAdmin className="text-5xl text-white" />
                <p className="text-white text-4xl font-bold">2</p>
              </div>
              <div className="">
                <h3 className="text-white text-2xl font-medium">
                  {t("servic.subtitle2")}
                </h3>
                <p className="text-gray-400 mt-3">{t("servic.text2")}</p>
              </div>
            </div>
            <div className="flex gap-5 hover:scale-103 bg-[#0c0b0b] p-8 rounded-3xl max-[1024px]:flex-col">
              <div className="flex flex-col max-[1024px]:flex-row justify-between items-center">
                <MdOutlineSecurity className="text-5xl text-white" />
                <p className="text-white text-4xl font-bold">3</p>
              </div>
              <div className="">
                <h3 className="text-white text-2xl font-medium">
                  {t("servic.subtitle3")}
                </h3>
                <p className="text-gray-400 mt-3">{t("servic.text3")}</p>
              </div>
            </div>
            <div className="flex gap-5 hover:scale-103 bg-[#0c0b0b] p-8 rounded-3xl max-[1024px]:flex-col">
              <div className="flex flex-col max-[1024px]:flex-row justify-between items-center">
                <FaHeadset className="text-5xl text-white" />
                <p className="text-white text-4xl font-bold">4</p>
              </div>
              <div className="">
                <h3 className="text-white text-2xl font-medium">
                  {t("servic.subtitle4")}
                </h3>
                <p className="text-gray-400 mt-3">{t("servic.text4")}</p>
              </div>
            </div>
            <div className="flex gap-5 hover:scale-103 bg-[#0c0b0b] p-8 rounded-3xl max-[1024px]:flex-col">
              <div className="flex flex-col max-[1024px]:flex-row justify-between items-center">
                <SiBisecthosting className="text-5xl text-white" />
                <p className="text-white text-4xl font-bold">5</p>
              </div>
              <div className="">
                <h3 className="text-white text-2xl font-medium">
                  {t("servic.subtitle5")}
                </h3>
                <p className="text-gray-400 mt-3">{t("servic.text5")}</p>
              </div>
            </div>
            <div className="flex gap-5 hover:scale-103 bg-[#0c0b0b] p-8 rounded-3xl max-[1024px]:flex-col">
              <div className="flex flex-col max-[1024px]:flex-row justify-between items-center">
                <CiGlobe className="text-5xl text-white" />
                <p className="text-white text-4xl font-bold">6</p>
              </div>
              <div className="">
                <h3 className="text-white text-2xl font-medium">
                  {t("servic.subtitle6")}
                </h3>
                <p className="text-gray-400 mt-3">{t("servic.text6")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
