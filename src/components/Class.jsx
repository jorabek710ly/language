import React, { useEffect } from 'react'
// Use Translation
import { useTranslation } from 'react-i18next';
// Images
import class1 from "../assets/images/class-1.png";
import class2 from "../assets/images/class-2.png";
import class3 from "../assets/images/class-3.png";
import class4 from "../assets/images/class-4.png";
import class5 from "../assets/images/class-5.png";

const Class = () => {

  const { t, i18n } = useTranslation();
  const savedLan = localStorage.getItem("language");
  useEffect(() => {
    i18n.changeLanguage(savedLan);
  }, [savedLan]);

  return (
    <section className="py-16 bg-white text-center">
      <div className="container">
        <div className='wrapper'>
          <h2 className="text-4xl font-[G7] font-bold mb-12">{t("classes.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            <div className="w-[300px] bg-primary-bg text-white rounded-2xl shadow-md p-4">
              <img src={class1} alt="" className="rounded-xl mb-4 w-full h-64 object-cover" />
              <h3 className="text-lg font-[G6] font-semibold">{t("classes.class0.title")}</h3>
              <p className="italic font-[G5] text-sm">{t("classes.class0.age")}</p>
              <p className="font-[G4] text-sm mt-2 mb-4">
                {t("classes.class0.subjects")}
              </p>
              <button className="font-[G5] bg-white text-[#6C63FF] font-semibold px-4 py-1 rounded-lg text-sm">{t("classes.signup")}</button>
            </div>
            <div className="w-[300px] bg-primary-bg text-white rounded-2xl shadow-md p-4">
              <img src={class2} alt="" className="rounded-xl mb-4 w-full h-64 object-cover" />
              <h3 className="text-lg font-[G6] font-semibold">{t("classes.class1.title")}</h3>
              <p className="italic font-[G5] text-sm">{t("classes.class1.age")}</p>
              <p className="font-[G4] text-sm mt-2 mb-4">
                {t("classes.class1.subjects")}
              </p>
              <button className="font-[G5] bg-white text-[#6C63FF] font-semibold px-4 py-1 rounded-lg text-sm">{t("classes.signup")}</button>
            </div>
            <div className="w-[300px] bg-primary-bg text-white rounded-2xl shadow-md p-4">
              <img src={class3} alt="" className="rounded-xl mb-4 w-full h-64 object-cover" />
              <h3 className="text-lg font-[G6] font-semibold">{t("classes.class2.title")}</h3>
              <p className="italic font-[G5] text-sm">{t("classes.class2.age")}</p>
              <p className="font-[G4] text-sm mt-2 mb-4">
                {t("classes.class2.subjects")}
              </p>
              <button className="font-[G5] bg-white text-[#6C63FF] font-semibold px-4 py-1 rounded-lg text-sm">{t("classes.signup")}</button>
            </div>
            <div className="w-[300px] bg-primary-bg text-white rounded-2xl shadow-md p-4">
              <img src={class4} alt="" className="rounded-xl mb-4 w-full h-64 object-cover" />
              <h3 className="text-lg font-[G6] font-semibold">{t("classes.class3.title")}</h3>
              <p className="italic font-[G5] text-sm">{t("classes.class3.age")}</p>
              <p className="font-[G4] text-sm mt-2 mb-4">
                {t("classes.class3.subjects")}
              </p>
              <button className="font-[G5] bg-white text-[#6C63FF] font-semibold px-4 py-1 rounded-lg text-sm">{t("classes.signup")}</button>
            </div>
            <div className="w-[300px] bg-primary-bg text-white rounded-2xl shadow-md p-4">
              <img src={class5} alt="" className="rounded-xl mb-4 w-full h-64 object-cover" />
              <h3 className="text-lg font-[G6] font-semibold">{t("classes.class4.title")}</h3>
              <p className="italic font-[G5] text-sm">{t("classes.class4.age")}</p>
              <p className="font-[G4] text-sm mt-2 mb-4">
                {t("classes.class4.subjects")}
              </p>
              <button className="font-[G5] bg-white text-[#6C63FF] font-semibold px-4 py-1 rounded-lg text-sm">{t("classes.signup")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default React.memo(Class);