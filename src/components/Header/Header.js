import { useEffect, useRef } from "react";
import "./style.css";
import { motion } from "framer-motion"

const Header = ({ isDarkTheme, handleTheme }) => {

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
