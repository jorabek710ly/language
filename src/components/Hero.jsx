import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import heroImage from "../assets/images/hero-image.png"

const Hero = () => {
  const { t, i18n } = useTranslation();
  const savedLan = localStorage.getItem("language");

  useEffect(() => {
    if (savedLan) {
      i18n.changeLanguage(savedLan);
    }
  }, [savedLan]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">The Best Future Stars - </span>{t("hero.careForFuture")}
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            {t("hero.experiencedTeachers")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm md:text-base hover:bg-blue-700 transition">
              {t("hero.call")}
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-sm md:text-base hover:bg-blue-50 transition">
              {t("hero.more")}
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Student"
            className="w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default React.memo(Hero);
