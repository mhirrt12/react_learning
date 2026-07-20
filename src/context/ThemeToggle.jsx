import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {isDark ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
};

export default ThemeToggle;