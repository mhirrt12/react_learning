import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./context/ThemeToggle";
import Counter from "./component/Counter";
import LikeButton from "./component/LikeButton";
import MessageButton from "./component/MessageButton"

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
      <LikeButton />
      <h1>Context API Theme App</h1>
      <Counter /><br />
      <MessageButton />

    </div>
  );
}

export default App;