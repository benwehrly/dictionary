import "./style.css";
import useToggle from "../../hooks/useToggle";
import axios from "axios";

const Buttons = ({
  handleSubmit,
  handleRandomWord,
  setWord,
}) => {
  const randomUrl = "https://random-word-api.herokuapp.com/word";


  function handleRandomWord(e) {
    e.preventDefault()
    axios.get(randomUrl).then(res => {
      setWord(res.data)
    })
  }

  return (
    <div className="buttons">
      <Button handleClick={handleSubmit} text="Search" />
      <Button handleClick={handleRandomWord} text="Random" />
    </div>
  );
};

export default Buttons;

const Button = ({ handleClick, text }) => {
  const {
    isToggled: isHovered,
    toggleOn: mouseOn,
    toggleOff: mouseOff,
  } = useToggle(false);

  return (
    <button
      type="submit"
      onClick={handleClick}
      onMouseEnter={mouseOn}
      onMouseLeave={mouseOff}
      onMouseUp={mouseOff}
      onTouchEnd={mouseOff}
      onMouseDown={(e) => e.preventDefault()}
    >
      <span>{text}</span>
      <div className={isHovered ? "hover-element expanded" : "hover-element"} />
    </button>
  );
};
