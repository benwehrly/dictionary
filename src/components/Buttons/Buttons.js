import './style.css'
import useToggle from '../../hooks/useToggle';

const Buttons = ({ handleSubmit, handleRandomWord }) => {
  
    return (
      <div className="buttons">
        <Button handleClick={handleSubmit} text='Search'/>
        <Button handleClick={handleRandomWord} text='Random'/>
      </div>
    );
  };

  export default Buttons

  const Button = ({ handleClick, text }) => {

    const { isToggled: isHovered, toggleOn: mouseOn, toggleOff: mouseOff } = useToggle(false)

      return (
        <button
        type="submit"
        onClick={handleClick}
        onMouseEnter={mouseOn}
        onMouseLeave={mouseOff}
        onMouseUp={mouseOff}
        onTouchEnd={mouseOff}
        onMouseDown={e => e.preventDefault()}
      >
        <span>{text}</span>
        <div className={isHovered? "hover-element expanded" : "hover-element"}/>
      </button>
      )
  }