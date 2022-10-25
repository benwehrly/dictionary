import { motion, AnimatePresence } from "framer-motion";
import RelatedWords from '../RelatedWords/RelatedWords';

const Word = ({ word, setSearchTerm, searchTerm, isDarkTheme }) => {
    const { word: thisWord, phonetic } = word;
    const type = word.meanings[0].partOfSpeech;
    const synonyms = word.meanings[0].synonyms;
    const antonyms = word.meanings[0].antonyms;
    const definitions = word.meanings[0].definitions;
  
    return (
      <AnimatePresence mode="wait" initial="false">
        <motion.div
          initial={{ x: -2000, skew: 30 }}
          animate={{ x: 0, skew: 0 }}
          exit={{ x: 2000, skew: 30 }}
          key={searchTerm}
          transition={{ duration: 0.3, type: "spring" }}
        >
          <h2>
            {thisWord} - {phonetic} {phonetic && type && '-'} {type}
          </h2>
          <div className="results">
            <h4 className="definitions">
              {definitions.slice(0,3).map((def) => (
                <p 
                    className="def"
                    style={{ backgroundColor: isDarkTheme && 'rgb(50, 60, 80)',
                        color: isDarkTheme && 'rgb(255, 255, 245)'}}
                >
                  <span style={{ textTransform: "capitalize" }}>
                    {thisWord}:{" "}
                  </span>{" "}
                  {def.definition}
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