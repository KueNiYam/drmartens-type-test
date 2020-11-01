import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import resultItems from "../../data/resultItems";
import '../../css/results.css'

const Results = () => {
  const history = useHistory();
  const resultItem = resultItems[useParams().id];

  if (!resultItem) {
    history.push('/');
  }

  return (
    <div className="resultPage">
      <div className="header">
        <div className="headerA"/>
        <div className="headerB"/>
        <div className="headerC">나의 닥터마틴 유형은</div>
        <div className="headerD"/>
        <div className="headerE"/>
        <div className="headerF"/>
      </div>
      <div className="shoeContainer">shoeContainer</div>
      <div className="descriptionContainer">descriptionContainer</div>
      <div className="outfitContainer">outfitContainer</div>
      <div className="friendContainer">friendContainer</div>
      <div className="footer">footer</div>
    </div>
  );
};

export default Results;