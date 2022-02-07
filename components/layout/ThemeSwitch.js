import React, { useState, useEffect } from "react";
import Darktheme from "./Darktheme";

function loadDarkMode() {
  if (typeof localStorage === "undefined") {
    return false;
  }
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
}
function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  console.log("DarkMode:", darkMode);
  const text = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <button onClick={toggleDarkMode} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <Darktheme />}
    </>
  );
}

export default ThemeSwitch;
