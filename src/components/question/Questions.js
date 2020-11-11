import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Question from "./Question";
import "../../css/questions.css"
import questionItems from "../../data/questionItems";
import resultsByA from "../../data/resultsByA";

const Questions = () => {
  const history = useHistory();
  const [state, setState] = useState({
    id: 1,
    typeA: 0,
    typeB: 0
  });

  const onEnd = () => {
    history.push(`/results/${resultsByA[state.typeA]}`);
  };

  const onAnswer = (answer) => {
    if (answer === 'A') {
      setState({
        id: state.id + 1,
        typeA: state.typeA + 1,
        typeB: state.typeB
      });
      return;
    }

    if (answer === 'B') {
      setState({
        id: state.id + 1,
        typeA: state.typeA,
        typeB: state.typeB + 1
      });
      return;
    }

    setState({
      id: state.id + 1,
      typeA: state.typeA,
      typeB: state.typeB
    })
  };

  useEffect(() => {
    console.log(state.typeA, state.typeB);

      if (state.id > Object.keys(questionItems).length) {
        onEnd();
      }
    }, [state]
  );

  return (
    <>
      <Question questionId={state.id} onAnswer={onAnswer} key={state.id}/>
    </>
  );
};

export default Questions;