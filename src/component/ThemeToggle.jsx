import { useState } from 'react'

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    return (
      <>
        <h1
          style={
            isDark
              ? {
                  backgroundColor: "black",
                  fontSize: "40px",
                  textAlign: "center",
                }
              :  {
                  backgroundColor: "white",
                  fontSize: "40px",
                  textAlign: "center",
                }
          }
        >
          {isDark ? "dark" : "light"}
        </h1>
        <button onClick={() => setIsDark(!isDark)}>toggle theme</button>
      </>
    );
}
export default ThemeToggle