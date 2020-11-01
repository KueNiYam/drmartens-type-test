import React from 'react';
import questionItems from "../../data/questionItems";

const Question = ({questionId, onAnswer}) => {
  const questionItem = questionItems[questionId];

  return !questionItem ? <div /> : (
    <div className="questionPage">
      <div className="top">
        <div className="leftTop"/>
        <div className="rightTop"/>
        <div className="leftBottom"/>
        <div className="rightBottom">
          <div className="questionHead">{questionItem.head}</div>
        </div>
      </div>
      <div className="questionContainer">
        <div className="questionContent">
          {questionItem.question.split('\n').map(line => {
            return <span>{line}<br/></span>
          })}</div>
      </div>
      <div className="answersContainer">
        {
          questionItem.answers.map((answer, index) => {
            return (
              <div
                className="answerContainer"
                onClick={() => onAnswer(questionItem.answerTypes[index])}
              >
                <div className="answerContent">
                  {answer.split('\n').map(line => {
                    return <span>{line}<br/></span>;
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Question;