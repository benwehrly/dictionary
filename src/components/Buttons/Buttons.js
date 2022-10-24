import './style.css'
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const Buttons = ({ handleSubmit, handleRandomWord, count }) => {
    const { data: random } = useFetch(
      "https://random-word-api.herokuapp.com/word",
      count
    );
  
    return (
      <div className="buttons">
        <Button handleClick={handleSubmit} text='Search'/>
        <Button handleClick={handleRandomWord} random={random} text='Random'/>
      </div>
    );
  };

  export default Buttons

  const Button = ({ handleClick, text, random }) => {

    const [ isHovered, setIsHovered ] = useState(false)

      return (
        <button
        type="submit"
        onClick={() => handleClick(random)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{text}</span>
        <div className="hover" style={{ width: isHovered && "100%" }} />
      </button>
      )
  }