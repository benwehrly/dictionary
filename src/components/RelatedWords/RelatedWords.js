import "./style.css";

const RelatedWords = ({ text, type, setSearchTerm, setRelatedWord }) => {
  
  const handleClick = (term) => {
    setSearchTerm(term);
    setRelatedWord(term);
  };

  return (
    <div className="synonyms">
      <h2>{text}</h2>
      <div className="synonymsList">
        {type.map((syn, i) => (
          <button
            key={i}
            style={{ fontWeight: 300 }}
            onClick={() => handleClick(syn)}
          >
            {syn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelatedWords;
