import "./style.css";

const RelatedWords = ({ text, type, setWord }) => {

  const handleClick = (term) => {
    setWord(term)
  }

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
