import React, { useState, useEffect, useRef } from 'react'
// Use Translation
import { useTranslation } from 'react-i18next';
// Icons
import SiteLogo from "../assets/images/school-logo.svg";
import UZLogo from "../assets/images/flag-uz.svg";
import ENLogo from "../assets/images/flag-gb.svg";
import RULogo from "../assets/images/flag-ru.svg";
import Call from "../assets/images/call.svg";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [languageModal, setLanguageModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("language") || "ru");

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage]);

    const handleTranslate = (language) => {
        i18n.changeLanguage(language);
        setSelectedLanguage(language);
        localStorage.setItem("language", language);
    }

    const modalRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setLanguageModal(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className='site_header bg-gradient-to-r from-blue-600 to-blue-800 text-white font-[G5] text-base md:text-lg lg:text-xl xl:text-2xl'>
            <div className="container">
                <nav className='header_nav h-[70px] md:h-24 lg:h-32 xl:h-36 flex items-center justify-between'>

                    {/* Logo */}
                    <div className='header_nav_logo'>
                        <img className='w-20 md:w-24 lg:w-32 xl:w-[156px] h-full' src={SiteLogo} alt="School Logo" />
                    </div>

                    {/* Menu */}
                    <ul className='hidden items-center gap-3 lg:gap-7 xl:gap-11 text-white md:flex'>
                        <li><a href="#">{t("navbar.aboutOurSchool")}</a></li>
                        <li><a href="#">{t("navbar.advantages")}</a></li>
                        <li><a href="#">{t("navbar.classes")}</a></li>
                        <li><a href="#">{t("navbar.contacts")}</a></li>
                    </ul>

                    {/* Right Side */}
                    <div className='flex items-center gap-4'>

                        {/* Contact Us Button */}
                        <button className='hidden xl:block h-8 sm:h-9 md:h-10 lg:h-11 xl:h-[50px] px-4 lg:px-7 xl:px-9 rounded-md bg-white hover:bg-blue-100 text-blue-800 font-semibold transition'>
                            {t("navbar.contactUs")}
                        </button>

                        {/* Mobile call icon */}
                        <button className='xl:hidden'>
                            <img src={Call} alt="Call" />
                        </button>

                        {/* Language Selector */}
                        <div
                            onClick={() => setLanguageModal(true)}
                            onMouseOver={() => setLanguageModal(true)}
                            onMouseLeave={() => setLanguageModal(false)}
                            className={`${languageModal ? "border-black" : "border-transparent"
                                } relative border-2 transition rounded-full flex items-center justify-center bg-black/90 size-[30px] sm:size-9 md:size-10 lg:size-11 xl:size-[50px] cursor-pointer`}
                        >
                            {
                                selectedLanguage === "ru" ? <img className='rounded-full' src={RULogo} alt="" />
                                    : selectedLanguage === "en" ? <img className='rounded-full' src={ENLogo} alt="" />
                                        : selectedLanguage === "uz" ? <img className='rounded-full' src={UZLogo} alt="" />
                                            : <img className='rounded-full' src={RULogo} alt="" />
                            }

                            {/* Language dropdown */}
                            {languageModal && (
                                <div
                                    ref={modalRef}
                                    onMouseOver={() => setLanguageModal(true)}
                                    onMouseLeave={() => setLanguageModal(false)}
                                    className="absolute top-full mt-2 right-0 w-56 lg:w-72 rounded-2xl bg-black shadow-xl ring-1 ring-black ring-opacity-5 z-50"
                                >
                                    {[
                                        { code: "uz", label: t("language.uzbek"), flag: UZLogo },
                                        { code: "en", label: t("language.english"), flag: ENLogo },
                                        { code: "ru", label: t("language.russian"), flag: RULogo }
                                    ].map(({ code, label, flag }) => (
                                        <div
                                            key={code}
                                            onClick={() => handleTranslate(code)}
                                            className="flex items-center gap-3 px-5 py-3 border-b last:border-0 cursor-pointer transition-colors duration-200 hover:bg-white hover:text-black rounded-none"
                                        >
                                            <img src={flag} alt={`${label} Flag`} className="w-7 h-7 rounded-full object-cover shadow-sm" />
                                            <p className="text-base lg:text-lg font-medium">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default React.memo(Header);
