import './style.css'

const RelatedWords = ({ text, type, setSearchTerm }) => {
    return (
      <div className="synonyms">
        <h2 style={{ margin: "5px" }}>{text}</h2>
        <div className="synonymsList">
          {type.map((syn) => (
            <p
              onClick={() => {
                setSearchTerm(syn);
              }}
            >
              {syn}
            </p>
          ))}
        </div>
      </div>
    );
  };

  export default RelatedWords;