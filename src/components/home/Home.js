import React from 'react';
import "../../css/home.css"
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="drMartens title">Dr.Martens</div>
      <div className="topTwinkle">
        <img className="twinkle" src="/images/twinkle.png"/>
      </div>
      <div className="middle">
        <div className="middleItems">
          <div className="description">나에게 어울리는 닥터마틴은?</div>
          <Link to="/questions">
            <div className="testButton">닥터마틴 유형 알아보기</div>
          </Link>
        </div>
      </div>
      <div className="bottomTwinkle">
        <img className="twinkle" src="/images/twinkle.png"/>
      </div>
      <div className="typeTest title">TYPE TEST</div>
    </>
  );
};

export default Home;