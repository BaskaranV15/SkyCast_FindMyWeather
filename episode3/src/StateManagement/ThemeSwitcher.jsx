import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      color: "#000000",
      transition: "all 0.3s ease",
    },
    dark: {
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div
      style={{ ...themeStyles[theme], padding: "20rem", textAlign: "center", margin:0 }}
    >
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;