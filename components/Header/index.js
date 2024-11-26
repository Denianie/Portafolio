import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useLanguage } from "../../utils/languageContext";

const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, portfolioData } = useLanguage(); // Use the context
  const [mounted, setMounted] = useState(false);

  const { name, menu, showResume, darkMode } = portfolioData;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigation = (section) => {
    // Set the section in the query params
    if (router.pathname !== "/") {
      router.push({ pathname: "/", query: { section } });
    } else {
      scrollToSection(section);
    }
  };
  
  const scrollToSection = (section) => {
    if (section === "work" && handleWorkScroll) handleWorkScroll();
    if (section === "about" && handleAboutScroll) handleAboutScroll();
  };
  
  // Detect query param changes and scroll when on the homepage
  useEffect(() => {
    if (router.pathname === "/") {
      const section = router.query.section;
      if (section) {
        scrollToSection(section);
      }
    }
  }, [router.pathname, router.query]);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                <Button onClick={toggleLanguage}>
                  {language === "en" ? "ES" : "EN"} {/* Toggle Button */}
                </Button>
                {darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button onClick={() => handleNavigation("work")}>{menu.work}</Button>
                <Button onClick={() => handleNavigation("about")}>{menu.about}</Button>
                {/* {showBlog && (
                  <Button onClick={() => router.push("/blog")}>{menu.blog}</Button>
                )} */}
                {showResume && (
                  <Button
                    onClick={() =>
                      router.push("/resume")
                    }
                  >
                    {menu.resume}
                  </Button>
                )}
                <Button
                  onClick={() => window.open("mailto:denilumin@gmail.com")}
                >
                  {menu.contact}
                </Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        <div className="flex">
          <Button onClick={() => handleNavigation("work")}>{menu.work}</Button>
          <Button onClick={() => handleNavigation("about")}>{menu.about}</Button>
          {/* {showBlog && (
            <Button onClick={() => router.push("/blog")}>{menu.blog}</Button>
          )} */}
          {showResume && (
            <Button onClick={() => router.push("/resume")}>{menu.resume}</Button>
          )}
          <Button onClick={() => window.open("mailto:denilumin@gmail.com")}>
            {menu.contact}
          </Button>
          <Button onClick={toggleLanguage}>
            {language === "en" ? "ES" : "EN"} {/* Toggle Language */}
          </Button>
          {mounted && theme && darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              ></img>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
