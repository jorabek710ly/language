import React, { useEffect } from 'react'
// Use Translation
import { useTranslation } from 'react-i18next'
// Images
import schoolImage from "../assets/images/about-image.png";

const Contact = () => {

  const { t, i18n } = useTranslation();
  const savedLan = localStorage.getItem("language");
  useEffect(() => {
    i18n.changeLanguage(savedLan);
  }, [savedLan]);

  return (
    <section className='section_contact'>
      <div className="container">
        <div className="wrapper font-[G4]">
          <h1 className="text-3xl font-[G7] font-bold text-center mb-6">{t("contact.contactUs")}</h1>
          <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 bg-primary-bg text-white p-6">
              <h2 className="text-xl font-semibold mb-4 font-[G5]">{t("contact.contacts")}</h2>
              <p className="mb-2">{t("contact.address")}</p>
              <p className="mb-2">{t("contact.phones")}</p>
              <img src={schoolImage} alt="School" className="mt-4 rounded" />
            </div>
            <div className="w-full md:w-1/2 bg-primary-bg text-white p-6">
              <h2 className="text-xl font-semibold mb-4 [font-G5]">{t("contact.leaveRequest")}</h2>
              <p className="mb-4">{t("contact.discountOffer")}</p>
              <div className="space-y-4">
                <input type="text" placeholder={t("contact.firstName")} className="bg-white text-black w-full p-2 rounded" />
                <input type="text" placeholder={t("contact.lastName")} className="bg-white text-black w-full p-2 rounded" />
                <textarea type="text" placeholder={t("contact.phoneNumber")} className="bg-white text-black w-full p-2 rounded" />
                <button className="w-full bg-white text-primbg-primary-bg p-2 text-black rounded">{t("contact.send")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Contact);