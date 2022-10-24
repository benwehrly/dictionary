import './App.css';
import { useState, useRef, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import Footer from './components/Footer/Footer';
import Word from './components/Word/Word';
import Header from './components/Header/Header'
import Form from './components/Form/Form';


export default function App() {
  const [searchTerm, setSearchTerm] = useState("definition");
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [ darkTheme, setDarkTheme ] = useState(false)
  const appRef = useRef(null);

  useEffect(() => {
    appRef.current.scrollIntoView({ behavior: "smooth" });
    setText(searchTerm);
  }, [searchTerm]);

  const { data } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`,
    count
  );

  function handleSubmit(e) {
    setCount((prev) => prev + 1);
    e.preventDefault();
    setSearchTerm(text);
  }

  function handleRandomWord(term) {
    // wordRef.current.value = term;
    setSearchTerm(term);
    setText(term);
  }

  const theme = {
    backgroundColor: darkTheme && 'rgb(30,30,40)',
    color: darkTheme && 'white'
  }

  return (
    <div className="App" ref={appRef} style={theme}>
      <Header 
        darkTheme={darkTheme} 
        setDarkTheme={setDarkTheme} 
      />
      <Form 
        text={text} 
        count={count} 
        handleSubmit={handleSubmit} 
        handleRandomWord={handleRandomWord}
        setText={setText}
      />
      {data?.[0] ? (
        <Word
          word={data[0]}
          count={count}
          setSearchTerm={setSearchTerm}
          setText={setText}
          searchTerm={searchTerm}
          darkTheme={darkTheme}
        />
      ) : (
        <h1>Word not found</h1>
      )}
      <Footer />
    </div>
  );
}
