import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import class1 from "../assets/images/class-1.png"
import class2 from "../assets/images/class-2.png"
import class3 from "../assets/images/class-3.png"
import class4 from "../assets/images/class-4.png"
import class5 from "../assets/images/class-5.png"

const classesData = [
  { img: class1, key: "class0" },
  { img: class2, key: "class1" },
  { img: class3, key: "class2" },
  { img: class4, key: "class3" },
  { img: class5, key: "class4" },
]

const Class = () => {
  const { t, i18n } = useTranslation()
  const savedLan = localStorage.getItem("language")

  useEffect(() => {
    if (savedLan) {
      i18n.changeLanguage(savedLan)
    }
  }, [savedLan])

  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-semibold mb-12">{t("classes.title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {classesData.map(({ img, key }) => (
            <div
              key={key}
              className="w-72 bg-gray-800 text-white rounded-2xl shadow-md p-5 flex flex-col items-center"
            >
              <img
                src={img}
                alt={t(`classes.${key}.title`)}
                className="rounded-xl mb-5 w-full h-60 object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold mb-1">{t(`classes.${key}.title`)}</h3>
              <p className="italic text-sm mb-2">{t(`classes.${key}.age`)}</p>
              <p className="text-sm mb-5">{t(`classes.${key}.subjects`)}</p>
              <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-lg text-sm hover:bg-indigo-50 transition">
                {t("classes.signup")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Class)
