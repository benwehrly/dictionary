import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import RelatedWords from "../RelatedWords/RelatedWords";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Word = ({ wordData, setWord }) => {
  const {
    partOfSpeech: type,
    synonyms,
    antonyms,
    definitions,
  } = wordData.meanings[0];
  const { word, phonetic } = wordData;
  const { isDarkTheme } = useContext(ThemeContext);

  return (
      <motion.div
        // initial={{ x: -2000, skew: 50 }}
        // animate={{ x: 0, skew: 0 }}
        // exit={{ x: 2000, skew: 50 }}
        // transition={{ duration: 0.3, type: "spring" }}
        className="word"
      >
        <h2>
          {word}{" "}
          <span style={{ fontSize: "1rem", color: "gray" }}>
            {" "}
            - {phonetic} {phonetic && type && "-"} {type}
          </span>
        </h2>
        <div className="results">
          <h4 className="definitions">
            {definitions.slice(0, 3).map(({ definition }, i) => (
              <p
                key={i}
                className={isDarkTheme ? "def dark-def" : "def light-def"}
              >
                <span className="definition-word">{word}: </span>
                <span className="definition-text">{definition}</span>
              </p>
            ))}
          </h4>
          {synonyms.length > 0 && (
            <RelatedWords type={synonyms} text="Synonyms" setWord={setWord} />
          )}
          {antonyms.length > 0 && (
            <RelatedWords type={antonyms} text="Antonyms" setWord={setWord} />
          )}
        </div>
      </motion.div>
  );
};

export default Word;
