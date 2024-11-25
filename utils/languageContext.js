import React, { createContext, useState, useContext } from "react";
import portfolioEn from "../data/portfolio.json";
import portfolioEs from "../data/portfolio_es.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  const portfolioData = language === "en" ? portfolioEn : portfolioEs;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, portfolioData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);