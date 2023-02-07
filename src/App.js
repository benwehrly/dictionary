import "./App.css";
import { useState, useRef, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { ThemeContext } from "./contexts/ThemeContext";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import useToggle from "./hooks/useToggle";
import Word from "./components/Word/Word";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import axios from "axios";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("Definition");
  const [word, setWord] = useState("Definition");
  const appRef = useRef(null);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const { isToggled: isDarkTheme, handleToggle: handleTheme } =
    useToggle(false);
  const {
    isFetching,
    error,
    data: wordData,
    refetch,
  } = useQuery({
    queryKey: ["word"],
    refetchOnWindowFocus: false,
    retry: 2,
    queryFn: () => axios(url),
  });

  useEffect(() => {
    setSearchTerm(word);
    refetch();
    if (wordData?.data) {
      appRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [word]);

  function handleSubmit(e) {
    e.preventDefault();
    setWord(searchTerm);
    refetch();
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, handleTheme }}>
      <div className={isDarkTheme ? "App dark" : "App"} ref={appRef}>
        <Header />
        <Form
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          refetch={refetch}
          setWord={setWord}
          handleSubmit={handleSubmit}
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div 
            key={word}
            initial={{ x: -2000, skew: 50 }}
            animate={{ x: 0, skew: 0 }}
            exit={{ x: 2000, skew: 50 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            {isFetching ? (
              <div className="loading">
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                />
              </div>
            ) : error ? (
              <h2
                className={
                  isDarkTheme ? "error message-dark" : "error message-light"
                }
              >
                {error.message}, Try Again.
              </h2>
            ) : (
              <Word word={word} wordData={wordData.data[0]} setWord={setWord} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  );
}
