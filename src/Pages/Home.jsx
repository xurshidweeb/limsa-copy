import React from "react";
import comp from "../assets/compy.png";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import FAQ from "../Faq";
import img1 from "../assets/bola.png";
import img2 from "../assets/qiz.png";
import Services from "./Services";
import Work from "./Work";

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
            <p className=" mb-4 max-[750px]:text-sm">{t("home.text")}</p>
            <a
              href="#behavior"
              className="max-[750px]:text-sm text-xl  px-4 py-1 bg-[#6C2DBA] border-2 border-[#6C2DBA] hover:bg-transparent rounded-md"
            >
              {t("home.btn")}
            </a>
          </div>
          <img src={comp} alt="" className="w-[55%] max-[750px]:w-[90%]" />
        </div>
      </div>
      <div className="faq bg-[#161616] py-30">
        <div className="flex justify-between items-center container px-4 max-[1216px]:flex-col max-[1216px]:text-center ">
          <div className="flex w-[600px] max-[600px]:w-[400px] max-[400px]:w-[300px]  max-[650px]:flex-col max-[650px]:items-center  gap-8">
            <img
              src={img1}
              alt=""
              className="w-full max-[770px]:m-0 max-[770px]:w-[300px] max-[770px]:h-[300px] object-cover max-[650px]:w-[500px] max-[450px]:w-[300px] mb-25"
            />
            <img
              src={img2}
              alt=""
              className="w-full max-[770px]:m-0 max-[770px]:w-[300px] max-[770px]:h-[300px] object-cover max-[650px]:w-[500px] max-[450px]:w-[300px] mt-25"
            />
          </div>
          <div className="">
            <h2 className="text-2xl max-[1216px]:mt-4 pl-4 font-bold text-white">
              {t("faq.faqName")}
            </h2>
            <FAQ />
          </div>
        </div>
      </div>

      <div className="fast-marque bg-[#161616]">
        <Marquee direction="right" speed={200}>
          <div className="text-4xl font-bold mr-20 text-white">
            {t("fast.fast1")}
          </div>
          <div className="text-4xl font-bold mr-20 text-white">/</div>
          <div className="text-4xl font-bold mr-20 text-white">
            {t("fast.fast2")}
          </div>
          <div className="text-4xl font-bold mr-20 text-white">/</div>
          <div className="text-4xl font-bold mr-20 text-white">
            {t("fast.fast3")}
          </div>
          <div className="text-4xl font-bold mr-20 text-white">/</div>
          <div className="text-4xl font-bold mr-20 text-white">
            {t("fast.fast4")}
          </div>
          <div className="text-4xl font-bold mr-20 text-white">/</div>
        </Marquee>
      </div>

      <Work/>
      <Services/>
    </div>
  );
}

export default Home;
