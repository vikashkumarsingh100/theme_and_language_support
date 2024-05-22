import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";

// get theme and language contexts here

export default function App() {
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");

  return (
    <div className={`App ${theme}`}>
      {/* Add context provider here */}
      <themeContext.Provider value={{ theme, setTheme }}>
        <languageContext.Provider value={{ language, setLanguage }}>
          <Navbar />
          <Home />
        </languageContext.Provider>
      </themeContext.Provider>
    </div>
  );
}
