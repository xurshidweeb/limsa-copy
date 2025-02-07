import React from "react";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";
import card7 from "../assets/card7.jpg";
import card8 from "../assets/card8.jpg";
import { useTranslation } from "react-i18next";

function Work() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <div className="cards bg-[#161616] pt-30">
        <div className="container px-4">
          <h2 className="font-bold text-4xl text-white text-center mb-5">
            Bizning oxirgi loyhalarimiz
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 text-white">
            <div className="border-b pb-5 s">
              <a href="#" className="font-bold ">
                ataevbahodirbuild.uz
              </a>
              <img
                src={card1}
                alt=""
                className="w-full transition mt-2 hover:scale-105"
              />
              <p className="pt-5">{t("cards.card1")}</p>
            </div>
            <div className="border-b pb-5 s">
              <a href="#" className="font-bold ">
                avtozoomrental.com
              </a>
              <img
                src={card2}
                alt=""
                className="w-full transition mt-2 hover:scale-105"
              />
              <p className="pt-5">{t("cards.card2")}</p>
            </div>
            <div className="border-b pb-5 s">
              <a href="#" className="font-bold ">
                it-time-academy.uz
              </a>
              <img
                src={card3}
                alt=""
                className="w-full transition mt-2 hover:scale-105"
              />
              <p className="pt-5">{t("cards.card3")}</p>
            </div>
            <div className="border-b pb-5 s">
              <a href="#" className="font-bold ">
                homekit.uz
              </a>
              <img
                src={card4}
                alt=""
                className="w-full transition mt-2 hover:scale-105"
              />
              <p className="pt-5">{t("cards.card4")}</p>
            </div>
            <div className="border-b pb-5 s">
              <a href="#" className="font-bold ">
                uzroyal.uz
              </a>
              <img
                src={card5}
                alt=""
                className="w-full transition mt-2 hover:scale-105"
              />
              <p className="pt-5">{t("cards.card5")}</p>
            </div>
            <div className="border-b pb-5 s">
              <a href="#" className="font-bold ">
                namgaoits.uz
              </a>
              <img
                src={card6}
                alt=""
                className="w-full transition mt-2 hover:scale-105"
              />
              <p className="pt-5">{t("cards.card6")}</p>
            </div>
            <div className="border-b pb-5 s">
              <a href="#" className="font-bold ">
                propartnyor.uz
              </a>
              <img
                src={card7}
                alt=""
                className="w-full transition mt-2 hover:scale-105"
              />
              <p className="pt-5">{t("cards.card7")}</p>
            </div>
            <div className="border-b pb-5 s">
              <a href="#" className="font-bold ">
                ZamonTour.uz
              </a>
              <img
                src={card8}
                alt=""
                className="w-full transition mt-2 hover:scale-105"
              />
              <p className="pt-5">{t("cards.card8")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
