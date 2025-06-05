import React, { useEffect } from 'react'
// Use Translation
import { useTranslation } from 'react-i18next';
// Images
import advantages1 from "../assets/images/advantages-1.png";
import advantages2 from "../assets/images/advantages-2.png";
import advantages3 from "../assets/images/advantages-3.png";
import advantages4 from "../assets/images/advantages-4.png";
import advantages5 from "../assets/images/advantages-5.png";

const Advantages = () => {

  const { t, i18n } = useTranslation();
  const savedLan = localStorage.getItem("language");
  useEffect(() => {
    i18n.changeLanguage(savedLan);
  }, [savedLan]);

  return (
    <section className="bg-primary-bg py-16 text-white">
      <div className="container">
        <div className="wrapper">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-[G7] font-bold mb-12">{t("advantages.title")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="overflow-hidden rounded-full border-white">
                  <img
                    src={advantages1}
                    alt=""
                    className="size-56 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-[G7] font-semibold mb-2">{t("advantages.threeMeals.title")}</h3>
                <p className="text-sm text-white/90 font-[G4]">
                  {t("advantages.threeMeals.description")}
                </p>
              </div>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="overflow-hidden rounded-full border-white">
                  <img
                    src={advantages2}
                    alt=""
                    className="size-56 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-[G7] font-semibold mb-2">{t("advantages.itTechnologies.title")}</h3>
                <p className="text-sm text-white/90 font-[G4]">
                  {t("advantages.itTechnologies.description")}
                </p>
              </div>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="overflow-hidden rounded-full border-white">
                  <img
                    src={advantages3}
                    alt=""
                    className="size-56 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-[G7] font-semibold mb-2">{t("advantages.mentalArithmetic.title")}</h3>
                <p className="text-sm text-white/90 font-[G4]">
                  {t("advantages.mentalArithmetic.description")}
                </p>
              </div>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="overflow-hidden rounded-full border-white">
                  <img
                    src={advantages4}
                    alt=""
                    className="size-56 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-[G7] font-semibold mb-2">{t("advantages.englishCommunication.title")}</h3>
                <p className="text-sm text-white/90 font-[G4]">
                  {t("advantages.englishCommunication.description")}
                </p>
              </div>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="overflow-hidden rounded-full border-white">
                  <img
                    src={advantages5}
                    alt=""
                    className="size-56 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-[G7] font-semibold mb-2">{t("advantages.foreignLanguages.title")}</h3>
                <p className="text-sm text-white/90 font-[G4]">
                  {t("advantages.foreignLanguages.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Advantages);