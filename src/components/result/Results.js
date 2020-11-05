import React from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
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
      <div className="shoeContainer">
        <div className="shoeInfoTab">
          <div className="shoeName">
            {resultItem.name.split('\n').map(line => <span>{line}<br/></span>)}
          </div>
          <div className="shoeTagsTab">
            {resultItem.tags.map((tag) => <span>#{tag}<br/></span>)}
          </div>
        </div>
        <div className="shoeImageTab">
          <img src={resultItem.image} alt={resultItem.name}/>
        </div>
      </div>
      <div className="descriptionContainer">{resultItem.description}</div>
      <div className="outfitContainer">
        <div className="outfitDescription">이렇게 코디하면 좋아요</div>
        <div className="outfitTitle">코디샷</div>
      </div>
      <div className="friendContainer">
        <div className="friendDescription">나와 잘 맞는 친구의 스타일은?</div>
        <div className="friendTitle">닥터마틴 친구 궁합</div>
      </div>
      <div className="footer">
        <div className="footerHead">
          스토리에 공유하고<br/>
          나의 닥터마틴 친구를 찾아보세요!
        </div>
        <div className="linkCopyButton">링크 복사</div>
        <div className="instagramButton">인스타그램에서 컨텐츠 더 보기</div>
        <Link to="/">
          <div className="restartButton">테스트 다시 하기</div>
        </Link>
        <div className="creditView">
          <div className="job">designer</div>
          <div className="email">
            b22bee.work@gmail.com
            <br/>
            insta @b22works
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;