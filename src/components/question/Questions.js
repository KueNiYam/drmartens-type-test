import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Question from "./Question";
import "../../css/questions.css"
import questionItems from "../../data/questionItems";
import resultGroups from "../../data/resultGroups";

const Questions = () => {
  const history = useHistory();
  const [state, setState] = useState({
    id: 1,
    typeA: 0,
    typeB: 0
  });

  const onEnd = () => {
    if (state.typeA > state.typeB) {
      const groupA = resultGroups['A'];
      const random = Math.floor(Math.random() * groupA.length);

      history.push(`/results/${groupA[random]}`);
      return;
    }

    const groupB = resultGroups['B'];
    const random = Math.floor(Math.random() * groupB.length);

    history.push(`/results/${groupB[random]}`);
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
      console.log(state.typeA);
      console.log(state.typeB);

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