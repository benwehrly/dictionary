import "./style.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "framer-motion"

const Header = () => {

  const { isDarkTheme, handleTheme } = useContext(ThemeContext)

  return (
    <header>
      <h1>Quicktionary</h1>
      <button className="theme" onClick={handleTheme} onMouseDown={e => e.preventDefault()}>
        <div className={isDarkTheme ? "toggle" : "toggle flipped"}>
          <motion.div 
            className="ripple"
            initial={{ scale: 1, opacity: 1}}
            animate={{ scale: 5, opacity: 0}}
            transition={{ duration: .3}}
            key={isDarkTheme}
        />
        </div>
      </button>
    </header>
  );
};

export default Header;
