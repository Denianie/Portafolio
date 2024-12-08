import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import Head from "next/head";
import { useTheme } from "next-themes";

import { useLanguage } from "../utils/languageContext"; // Importa el contexto


// // Data
// import { name, showResume } from "../data/portfolio.json";
// import { resume } from "../data/portfolio.json";
// import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  const { portfolioData } = useLanguage(); // Obtiene datos del idioma actual
  const { resume } = portfolioData; // Accede al objeto "resume" del JSON

  useEffect(() => {
    setMount(true);
    // if (!showResume) {
    if (!portfolioData.showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {/* Cambia el título dinámicamente según el idioma */}
      <Head>
        <title>{resume.title}</title> {/* Usa el título de resume */}
      </Head>

      {/* {data.showCursor && <Cursor />} */}
      {portfolioData.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          // data.showCursor && "cursor-none"
          // data.showCursor && ""
          portfolioData.showCursor && ""
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" 
                ? "bg-slate-800" 
                : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{portfolioData.name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">
                  {resume.sections.experience}
                </h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    />
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">
                  {resume.sections.education}
                </h1>
                <div className="mt-2">
                  <h2 className="text-lg">
                    {resume.education.universityName}
                  </h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">
                  {resume.sections.skills}
                </h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">
                        {resume.sections.languages}
                      </h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">
                        {resume.sections.frameworks}
                      </h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">
                        {resume.sections.others}
                      </h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
