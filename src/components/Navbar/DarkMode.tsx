"use client";

import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light",
  );

  const element =
    typeof window !== "undefined" ? document.documentElement : null;

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      if (element) {
        if (theme === "dark") {
          element.classList.remove("light");
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
          element.classList.add("light");
        }
      }
    }
  }, [theme, element]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          onClick={() => setTheme("light")}
          className="cursor-pointer text-2xl"
        />
      ) : (
        <BiSolidMoon
          onClick={() => setTheme("dark")}
          className="cursor-pointer text-2xl"
        />
      )}
    </>
  );
};

export default DarkMode;
