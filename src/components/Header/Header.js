import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./style.css";
import { motion } from "framer-motion"

const Header = () => {

  const { isDarkTheme, handleTheme } = useContext(ThemeContext)

  return (
    <header>
      <h1>Quicktionary</h1>
      <div className="theme" onClick={handleTheme}>
        <div className="toggle" style={{ marginLeft: isDarkTheme && "22px" }}>
          <motion.div 
            className="ripple"
            initial={{ scale: 1, opacity: 1}}
            animate={{ scale: 5, opacity: 0}}
            transition={{ duration: .3}}
            key={isDarkTheme}
        />
        </div>
      </div>
    </header>
  );
};

export default Header;
