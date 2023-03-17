import React, { useState } from "react";
import "./index.css";
import "./normalize.css";
import data from "./data";
import Question from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="main-container">
      <h2>Frequently Asked Questions(FAQ's)</h2>
      <section>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
};

export default App;
