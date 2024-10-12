// Data store (context) for dark mode
//state variable: isDark
//function to toggle dark mode
import { createContext, useEffect, useState } from "react";
const initialValues = {
  darkMode: false,
  toggle: () => {},
};
const DarkModeContext = createContext(initialValues);
function DarkModeProvider({ children }) {
  useEffect(() => {
    const mode = localStorage.getItem("darkMode");
    if (mode === "dark") {
      setDarkMode(true);
      document.body.classList.toggle("dark");
    }
  }, []);

  //state variables:
  const [darkMode, setDarkMode] = useState(false);
  //functions:
  function toggle() {
    // calculate the new state of the darkmode
    const newMode = !darkMode ? "dark" : "light";

    // set the new state of the darkmode in the local storage of the user
    localStorage.setItem("darkMode", newMode);

    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}
export { DarkModeProvider, DarkModeContext };
