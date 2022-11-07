import { motion, AnimatePresence } from "framer-motion";
import RelatedWords from "../RelatedWords/RelatedWords";
import { useContext } from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";

const Word = ({ word, setSearchTerm, searchTerm }) => {
  const { partOfSpeech: type, synonyms, antonyms, definitions } = word.meanings[0]
  const { word: thisWord, phonetic } = word;

const { isDarkTheme } = useContext(ThemeContext)

  return (
    <AnimatePresence mode="wait" initial="false">
      <motion.div
        initial={{ x: -2000, skew: 50 }}
        animate={{ x: 0, skew: 0 }}
        exit={{ x: 2000, skew: 50 }}
        key={searchTerm}
        transition={{ duration: .3, type: "spring" }}
      >
        <h2>
          {thisWord}  <span style={{ fontSize: '1rem', color: 'gray'}}> - {phonetic} {phonetic && type && "-"} {type}</span>
        </h2>
        <div className="results">
          <h4 className="definitions">
            {definitions.slice(0, 3).map((def) => (
              <p
                className="def"
                style={{
                  backgroundColor: isDarkTheme && "rgb(50, 60, 80)",
                  color: isDarkTheme && "rgb(255, 255, 245)",
                }}
              >
                <span style={{ textTransform: "capitalize" }}>
                  {thisWord}:{" "}
                </span>{" "}
                <span style={{ fontWeight: 300 }}>{def.definition}</span>
              </p>
            ))}
          </h4>
          {synonyms.length > 0 && (
            <RelatedWords
              type={synonyms}
              text="Synonyms"
              setSearchTerm={setSearchTerm}
            />
          )}
          {antonyms.length > 0 && (
            <RelatedWords
              type={antonyms}
              text="Antonyms"
              setSearchTerm={setSearchTerm}
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Word;
