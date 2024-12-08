import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Asegura que el componente espera hasta que el tema esté montado
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mientras no esté montado, usa un placeholder
  if (!mounted) {
    return (
      <button className="bg-gray-500 text-white p-2 rounded-lg opacity-50 pointer-events-none">
        {children}
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
          isDark ? "bg-white text-black" : "bg-black text-white"
        }  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${
          // before
          // data.showCursor && "cursor-none"
          // now
          data.showCursor
        }  ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        isDark
          ? "hover:bg-slate-600 text-white"
          : "hover:bg-slate-100"
      } hover:scale-105 active:scale-100  tablet:first:ml-0  ${
        // before
        // data.showCursor && "cursor-none"
        // now
        data.showCursor
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
