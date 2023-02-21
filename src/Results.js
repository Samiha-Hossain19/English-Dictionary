import React from "react";

const Results = ({ word, phonetics, meanings, setText }) => {
  return (
    <ul>
      <li className="word">
        <h2>{word}</h2>
        {phonetics.map((phonetic, index) => (
          <span key={index}>{phonetic.text}</span>
        ))}
      </li>
      <li className="contain">
        <h3>noun</h3>
        <div className="details">
          <h3>Meaning</h3>
          <p>-used as a greeting or to begin a phone conversation</p>
        </div>

        <div className="synonym">
          <h3>Synonyms</h3>
          <span>greeting,</span>
          <span>greeting,</span>
          <span>greeting</span>
        </div>
      </li>
    </ul>
  );
};

export default Results;
