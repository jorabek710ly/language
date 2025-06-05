import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import schoolImage from "../assets/images/about-image.png"

const Contact = () => {
  const { t, i18n } = useTranslation()
  const savedLan = localStorage.getItem("language")

  useEffect(() => {
    if (savedLan) {
      i18n.changeLanguage(savedLan)
    }
  }, [savedLan])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-semibold text-center mb-10">{t("contact.contactUs")}</h1>
        <div className="flex flex-col md:flex-row gap-8 rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2 bg-indigo-700 text-white p-8 flex flex-col">
            <h2 className="text-xl font-semibold mb-6">{t("contact.contacts")}</h2>
            <p className="mb-3">{t("contact.address")}</p>
            <p className="mb-3">{t("contact.phones")}</p>
            <img src={schoolImage} alt="School" className="mt-auto rounded-lg object-cover" />
          </div>

          <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-inner flex flex-col">
            <h2 className="text-xl font-semibold mb-6">{t("contact.leaveRequest")}</h2>
            <p className="mb-6 text-gray-700">{t("contact.discountOffer")}</p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder={t("contact.firstName")}
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder={t("contact.lastName")}
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder={t("contact.phoneNumber")}
                rows="4"
                className="p-3 rounded border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-700 text-white py-3 rounded font-semibold hover:bg-indigo-800 transition"
              >
                {t("contact.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Contact)
