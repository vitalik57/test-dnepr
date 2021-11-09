import React, { useState } from "react";
const initialState = [
  { "What is your marital status?": ["Single", "Married"] },
  { "Are you planning on getting married next year?": ["Yes", "No"] },
  { "How long have you been married?": ["Less than a year", "More than a year"] },
  { "Have you celebrated your one year anniversary?": ["Yes", "No"] }
];

const Questions = () => {
  const [state, setstate] = useState(initialState);
  const [number, setnumber] = useState({ number: 0 });
  const getState = () => {
    console.log(Object.values(state[1]).flat()[0]);
  };
  const getNumber = () => {
    setnumber(prev => {
      return { number: prev.number + 1 };
    });
  };
  const getQuestion = () => {
    setnumber(prev => {
      return { number: prev.number + 2 };
    });
  };
  if (number.number >= state.length) {
    number.number = 0;
    alert("It was a last question ");
  }
  console.log(number.number);
  return (
    <>
      <div className="questionst">
        {" "}
        <h2>Question:</h2>
        <ul> {<li>{Object.keys(state[number.number]).join()}</li>}</ul>
        {<button onClick={getNumber}>{Object.values(state[number.number]).flat()[0]}</button>}
        {<button onClick={getQuestion}>{Object.values(state[number.number]).flat()[1]}</button>}
      </div>
    </>
  );
};

export default Questions;
