import React, { useEffect } from 'react'
// Use Translation
import { useTranslation } from 'react-i18next'
// Images
import logo from "../assets/images/school-logo.svg";
import telegram from "../assets/images/telegram.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";

const Footer = () => {

  const { t, i18n } = useTranslation();
  const savedLan = localStorage.getItem("language");
  useEffect(() => {
    i18n.changeLanguage(savedLan);
  }, [savedLan]);

  return (
    <footer className="mt-12 sm:mt-16 lg:mt-24 text-center text-white bg-primary-bg ">
      <div className='container'>
        <div className="wrapper font-[G4] py-5 md:h-32 lg:h-40 flex flex-col gap-7 sm:gap-2 items-start sm:flex-row sm:items-center sm:justify-between">
          <div className=''>
            <img className='w-20 md:w-24 lg:w-32 xl:w-[156px] h-full' src={logo} alt="" />
          </div>
          <div className='flex text-start flex-col sm:flex-row sm:items-center gap-4'>
            <p className='font-[G5] text-base lg:text-[20px]'>{t("contact.contacts")}:</p>
            <div className='flex flex-col gap-1'>
              <p>+998971970771</p>
              <p>+998971970771</p>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='font-[G6] text-base lg:text-[20px] text-start'>{t("footer.beWithUs")}</p>
            <div className='flex items-center gap-4'>
              <img src={telegram} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer);