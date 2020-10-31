import React from 'react';
import QuestionItems from "../../data/QuestionItems";

const Question = ({number}) => {

  return (
    <div className="questionPage">
      <div className="top">
        <div className="leftTop"/>
        <div className="rightTop"/>
        <div className="leftBottom"/>
        <div className="rightBottom">
          <div className="questionHead">{QuestionItems[number].head}</div>
        </div>
      </div>
      <div className="questionContainer">
        <div className="questionContent">
          {QuestionItems[number].question.split('\n').map(line => {
            return <span>{line}<br/></span>
          })}</div>
      </div>
      <div className="answersContainer">
        {
          QuestionItems[number].answers.map((answer) => {
            return (
              <div className="answerContainer">
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