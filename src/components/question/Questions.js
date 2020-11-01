import React, {useState} from 'react';
import Question from "./Question";
import "../../css/questions.css"

const Questions = () => {
  const [number, setNumber] = useState(1);

  return (
    <>
      <Question number={number}/>
    </>
  );
};

export default Questions;