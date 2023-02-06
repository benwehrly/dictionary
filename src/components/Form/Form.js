import Buttons from "../Buttons/Buttons";
import "./style.css";

const Form = ({ setSearchTerm, searchTerm, refetch, handleSubmit, setWord }) => {
  return (
    <form
      className="main"
      onSubmit={handleSubmit}
    >
      <div className="inputContainer">
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={(e) => e.target.select()}
          autoFocus
        />
        <div className="searchIconContainer" onClick={handleSubmit}>
          <img
            className="searchIcon"
            src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
            alt=""
          />
        </div>
      </div>
      <Buttons
        setSearchTerm={setSearchTerm}
        refetch={refetch}
        handleSubmit={handleSubmit}
        setWord={setWord}
      />
    </form>
  );
};

export default Form;
