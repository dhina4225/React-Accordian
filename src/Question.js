import React, { useState } from "react";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Question = ({ id, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="question-container">
      <header>
        <h4>{question}</h4>
        <button type="button" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </header>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
};

export default Question;
