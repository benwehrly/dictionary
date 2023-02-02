import Buttons from "../Buttons/Buttons";
import './style.css'

const Form = ({ handleSubmit, handleRandomWord, setSearchTerm, searchTerm }) => {
  return (
    <form className="main" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={(e) => e.target.select()}
          autoFocus
        />
        <div className='searchIconContainer' onClick={handleSubmit}>
          <img
            className="searchIcon"
            src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
            alt=""
          />
        </div>
      </div>
      <Buttons
        handleSubmit={handleSubmit}
        handleRandomWord={handleRandomWord}
      />
    </form>
  );
};

export default Form;
