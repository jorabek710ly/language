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
    <section className="bg-blue-700 py-16 text-white">
      <div className="container">
        <div className="wrapper max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 font-[G7]">{t("advantages.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[advantages1, advantages2, advantages3, advantages4, advantages5].map((img, i) => (
              <div key={i} className="flex flex-col items-center text-center max-w-xs">
                <div className="overflow-hidden rounded-full border border-white w-56 h-56 mb-4">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-[G7]">
                  {t(`advantages.class${i}.title`) || t(`advantages.${["threeMeals", "itTechnologies", "mentalArithmetic", "englishCommunication", "foreignLanguages"][i]}.title`)}
                </h3>
                <p className="text-sm text-white/90 font-[G4]">
                  {t(`advantages.class${i}.description`) || t(`advantages.${["threeMeals", "itTechnologies", "mentalArithmetic", "englishCommunication", "foreignLanguages"][i]}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Advantages);
