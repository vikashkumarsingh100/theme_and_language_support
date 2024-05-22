import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";
import { useContext } from "react";
export const Navbar = () => {
  // get theme and lanauge contexts here
  const lanauge = useContext(languageContext);
  const theme = useContext(themeContext);
  function changeTheme(arg) {
    if (arg == "dark") {
      theme.setTheme("Light");
    } else {
      theme.setTheme("dark");
    }
  }
  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button
          onClick={() => {
            changeTheme(theme.theme);
          }}
        >
          {theme.theme} Theme
        </button>

        <span>
          {/* Show active language here */}
          {lanauge.language}
        </span>
      </div>
    </div>
  );
};
