import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#222" : "#fff",
        color: isDark ? "white" : "black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <ThemeToggle />
      <h1>Context API Theme App</h1>
    </div>
  );
}

export default App;