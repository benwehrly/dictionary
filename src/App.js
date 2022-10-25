import './App.css';
import { useState, useRef, useEffect } from "react";
import useFetch from "./hooks/useFetch";
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
    setCount((prev) => prev + 1);
    e.preventDefault();
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

  const isFound = data?.[0]

  return (
    <div className="App" ref={appRef} style={theme}>
      <Header 
        isDarkTheme={isDarkTheme}
        handleTheme={handleTheme}
      />
      <Form 
        text={text} 
        count={count} 
        handleSubmit={handleSubmit} 
        handleRandomWord={handleRandomWord}
        setText={setText}
      />
      {isFound ? (
        <Word
          word={data[0]}
          count={count}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          isDarkTheme={isDarkTheme}
        />
      ) : (
        <h1>Word not found</h1>
      )}
      <Footer />
    </div>
  );
}
