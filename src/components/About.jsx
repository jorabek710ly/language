import React, { useEffect } from 'react'
// Use Translation
import { useTranslation } from 'react-i18next';
// Images
import aboutImage from "../assets/images/about-image.png";

const About = () => {

  const { t, i18n } = useTranslation();
  const savedLan = localStorage.getItem("language");
  useEffect(() => {
    i18n.changeLanguage(savedLan);
  }, [savedLan]);

  return (
    <section className='section_about z-50'>
      <div className='container'>
        <div className='about_wrapper py-24 sm:py-28 lg:py-36 xl:py-52 w-full flex flex-col items-center gap-8 md:gap-9 lg:gap-11 md:flex-row'>
          <div className='flex-1'>
            <img src={aboutImage} alt="School" />
          </div>
          <div className='flex-1'>
            <h3 className='mb-6 md:mb-7 lg:mb-12 font-[G7] text-2xl sm:text-3xl md:text-4xl lg:text-[40px]'>{t("aboutUs.title")}</h3>
            <p className='font-[G4] text-base sm:text-lg lg:text-2xl'>{t("aboutUs.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(About);