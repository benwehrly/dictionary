import "./App.css";
import { useState, useRef, useEffect } from "react";
import { fetchData } from "./helpers";
import { ThemeContext } from "./contexts/ThemeContext";
import useToggle from "./hooks/useToggle";
import Word from "./components/Word/Word";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("Definition");
  const [randomWord, setRandomWord] = useState("");
  const [relatedWord, setRelatedWord] = useState("");
  const [wordData, setWordData] = useState("");
  const appRef = useRef(null);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
  const randomUrl = "https://random-word-api.herokuapp.com/word";
  const { isToggled: isDarkTheme, handleToggle: handleTheme } =
    useToggle(false);

  const fetchWord = (e) => {
    e?.preventDefault();
    fetchData(url).then((data) => setWordData(data));
  }

  const fetchRandomWord = () => {
    fetchData(randomUrl).then((data) => {
      setRandomWord(data);
      setSearchTerm(data);
    });
  }

  useEffect(() => {
    fetchWord();
  }, [randomWord, relatedWord]);

  useEffect(() => {
    appRef.current.scrollIntoView({ behavior: "smooth" });
  }, [wordData]);

  const wordIsFound = wordData?.[0];

  return (
    <ThemeContext.Provider value={{ isDarkTheme, handleTheme }}>
      <div className={isDarkTheme ? "App dark" : "App"} ref={appRef}>
        <Header />
        <Form
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={fetchWord}
          handleRandomWord={fetchRandomWord}
        />
        {wordIsFound ? (
          <Word
            wordData={wordData[0]}
            setRelatedWord={setRelatedWord}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
        ) : (
          <h2>Word not found</h2>
        )}
      </div>
    </ThemeContext.Provider>
  );
}
