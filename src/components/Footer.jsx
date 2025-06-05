import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import logo from "../assets/images/school-logo.svg"
import telegram from "../assets/images/telegram.svg"
import instagram from "../assets/images/instagram.svg"
import facebook from "../assets/images/facebook.svg"

const Footer = () => {
  const { t, i18n } = useTranslation();
  const savedLan = localStorage.getItem("language");

  useEffect(() => {
    if (savedLan) {
      i18n.changeLanguage(savedLan);
    }
  }, [savedLan]);

  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        
        {/* Logo */}
        <div className="flex flex-col items-start gap-4">
          <img src={logo} alt="School logo" className="w-32 h-auto" />
          <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{t("contact.contacts")}:</h3>
          <p className="text-sm">+998 97 197 07 71</p>
          <p className="text-sm">+998 97 197 07 71</p>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t("footer.beWithUs")}</h3>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Telegram">
              <img src={telegram} alt="Telegram" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagram} alt="Instagram" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
