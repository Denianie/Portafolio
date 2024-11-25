import React from "react";
import { useLanguage } from "../utils/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-5 right-5 bg-gray-200 p-2 rounded hover:bg-gray-300"
    >
      {language === "en" ? "Español" : "English"}
    </button>
  );
};

export default LanguageSwitcher;