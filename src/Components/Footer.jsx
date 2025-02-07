import React from "react";
import { useTranslation } from "react-i18next";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/footer-logo.png";

function Footer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <div className="bg-[#161616]">
        <div className="container px-4 py-20">
          <h1 className="text-4xl font-bold mb-8 text-white max-[640px]:text-center">
            {t("footer.title")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <li className="flex max-[640px]:flex-col max-[640px]:border max-[640px]:p-5 items-center gap-3 text-white">
                  <CiLocationOn className="text-3xl" />
                  <div className="">
                    <h3 className="text-2xl max-[640px]:text-center font-medium">
                      {t("footer.subtitle1")}{" "}
                    </h3>
                    <p className="text-sm mt-2">{t("footer.text1")} </p>
                  </div>
                </li>
                <li className="flex max-[640px]:flex-col max-[640px]:border max-[640px]:p-5 items-center gap-3 text-white">
                  <FiPhoneCall className="text-3xl" />
                  <div className="">
                    <h3 className="text-2xl max-[640px]:text-center font-medium">
                      {t("footer.subtitle2")}{" "}
                    </h3>
                    <p className="max-[640px]:text-center text-sm mt-2">
                      {t("footer.text2")}{" "}
                    </p>
                  </div>
                </li>
                <li className="flex max-[640px]:flex-col max-[640px]:border max-[640px]:p-5 items-center gap-3 text-white">
                  <MdOutlineAccessTimeFilled className="text-3xl" />
                  <div className="">
                    <h3 className="text-2xl max-[640px]:text-center font-medium">
                      {t("footer.subtitle3")}{" "}
                    </h3>
                    <p className="max-[640px]:text-center text-sm mt-2">
                      {t("footer.text3")}{" "}
                    </p>
                  </div>
                </li>
                <li className="flex max-[640px]:flex-col max-[640px]:border max-[640px]:p-5 items-center gap-3 text-white">
                  <FaShareAlt className="text-3xl" />
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl max-[640px]:text-center font-medium">
                      {t("footer.subtitle4")}{" "}
                    </h3>
                    <div className=" flex gap-3 pt-5">
                      <a
                        href="https://www.linkedin.com/company/limsa-2021/"
                        className=""
                      >
                        <FaLinkedinIn className="text-2xl text-gray-500" />
                      </a>
                      <a
                        href="https://www.instagram.com/egoistfunny/"
                        className=""
                      >
                        <FaInstagram className="text-2xl text-gray-500" />
                      </a>
                      <a href="https://t.me/egoistfy">
                        <FaTelegramPlane className="text-2xl text-gray-500" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl">
              <iframe
                className="w-full h-80 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473953.6933499747!2d-102.7727425057723!3d21.866666700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429eda94c1d5e7f%3A0x988ff796ad1cc18b!2sLimsa!5e0!3m2!1sen!2s!4v1738918531400!5m2!1sen!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container px-4  py-3">
          <div className="flex justify-between items-center gap-5 flex-wrap max-[582px]:justify-center">
            <a href="#" className="">
              <img src={logo} alt="" className="w-50" />
            </a>
            <p className="text-white">{t("footer.subtext")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
