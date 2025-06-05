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
    <section className='bg-white text-black section_about z-50'>
      <div className='container mx-auto px-6'>
        <div className='about_wrapper py-16 sm:py-20 lg:py-28 xl:py-36 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          <div className='flex-1'>
            <img 
              src={aboutImage} 
              alt="School" 
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
          <div className='flex-1'>
            <h3 className='mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl font-semibold font-[G7]'>
              {t("aboutUs.title")}
            </h3>
            <p className='font-[G4] text-base sm:text-lg lg:text-xl leading-relaxed'>
              {t("aboutUs.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(About);
