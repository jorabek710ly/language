import React, { useEffect } from 'react'
// Translation
import { useTranslation } from 'react-i18next'
// Image
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
    <section className="relative bg-gradient-to-r from-white-700 to-white-900 text-white py-12 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Left Side (Text) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="font-[G7] text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight mb-6">
              <span className="text-yellow-300">The Best Future Stars - </span>{t("hero.careForFuture")}
            </h1>
            <p className="font-[G4] text-sm sm:text-base md:text-lg xl:text-xl mb-8 text-white/90">
              {t("hero.experiencedTeachers")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-[G5] text-lg sm:text-xl px-6 py-3 rounded-xl transition shadow-lg">
                {t("hero.call")}
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-800 font-[G5] text-lg sm:text-xl px-6 py-3 rounded-xl border-2 border-yellow-400 transition shadow-lg">
                {t("hero.more")}
              </button>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Student with a book"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Hero);
