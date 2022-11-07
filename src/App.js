import './App.css';
import { useState, useRef, useEffect, useContext } from "react";
import useFetch from "./hooks/useFetch";
import { ThemeContext } from './contexts/ThemeContext';
import useToggle from './hooks/useToggle'
import Footer from './components/Footer/Footer';
import Word from './components/Word/Word';
import Header from './components/Header/Header'
import Form from './components/Form/Form';


export default function App() {
  const [searchTerm, setSearchTerm] = useState("definition");
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const appRef = useRef(null);

  useEffect(() => {
    appRef.current.scrollIntoView({ behavior: "smooth" });
    setText(searchTerm);
  }, [searchTerm]);

  const { data } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`,
    count
  );

  const { isToggled: isDarkTheme, handleToggle: handleTheme } = useToggle(false)

  function handleSubmit(e) {
    e.preventDefault();
    setCount((prev) => prev + 1);
    setSearchTerm(text);
  }

  function handleRandomWord(term) {
    setSearchTerm(term);
    setText(term);
  }

  const theme = {
    backgroundColor: isDarkTheme && 'rgb(30,30,40)',
    color: isDarkTheme && 'white'
  }

  const wordIsFound = data?.[0]

  return (
    <ThemeContext.Provider value={{ isDarkTheme, handleTheme }}>
      <div className="App" ref={appRef} style={theme}>
        <Header />
        <Form 
          text={text} 
          count={count} 
          handleSubmit={handleSubmit} 
          handleRandomWord={handleRandomWord}
          setText={setText}
        />
        {wordIsFound ? (
          <Word
            word={data[0]}
            count={count}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
        ) : (
          <h1>Word not found</h1>
        )}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
