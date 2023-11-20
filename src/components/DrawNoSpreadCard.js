import { useDispatch, useSelector } from "react-redux";
import { drawNoSpreadCard, clearDrawnCard } from "../cardsSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.svg";
import "./DrawNoSpreadCard.scss";
import TarotCard from "../Image/Tarot_card.png";

const DrawNoSpreadCard = () => {
  // 滾動頁面
  const [scrolling, setScrolling] = useState(false);

  const dispatch = useDispatch();
  const drawCards = useSelector((state) => state.cards.initialDrawCards);

  const handleDrawFiveCard = () => {
    dispatch(drawNoSpreadCard());
  };

  useEffect(() => {
    dispatch(clearDrawnCard());

    return () => {
      dispatch(clearDrawnCard());
    };
  }, [dispatch]);

  // 滑鼠滾動監聽
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="drawNoSpreadCard_container">
      {/* Navbar_container */}
      <button className={`navbar_container ${scrolling ? "scroll" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </button>

      {/* Title_container */}
      <div className="title_container">
        <h1>無牌陣占卜</h1>
        <h4>Five-Card Spread</h4>
      </div>

      {/* Info_container */}
      <div className="info_container">
        {/* Steps_area */}
        <div className="steps_area">
          <h4>占卜步驟</h4>
          <div className="steps_box">
            <div>
              <h3>01</h3>
              <p>靜下心後，在心理默念此問題至少3次</p>
            </div>
            <div>
              <h3>02</h3>
              <p>默念完畢後，點擊「開始抽牌」按鈕</p>
            </div>
          </div>
        </div>

        {/* Example_area */}
        <div className="example_area">
          <div className="title_area">
            <h4>默念問題範例</h4>
          </div>
          <div className="question_area">
            <div className="txt_area">
              <p>1. 我想知道現在創某項事業的時機是否適合?</p>
              <p>2.我想知道為何最近缺乏動力？應如何改變現狀？</p>
              <p>3.我想知道如何改善目前的人際關係？</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start_container */}
      <div className="start_container">
        <button onClick={handleDrawFiveCard}>開始抽牌</button>
        <div className="drawNewCard">
          {drawCards.length > 0 ? (
            drawCards.map((card) => (
              <div className="newCard_area" key={card.id}>
                <h1>{card.name}</h1>
                <h3>{card.key}</h3>
                <img
                  src={`${card.image}`}
                  alt="cards"
                  style={{
                    transform: card.reversed ? "rotate(180deg)" : "rotate(0deg)"
                  }}
                />
                <div className="explain_area">
                  <div className="positive_area">
                    <h4>正位解釋</h4>
                    <p>{card.positive}</p>
                  </div>
                  <div className="line"></div>
                  <div className="negative_area">
                    <h4>逆位解釋</h4>
                    <p>{card.negative}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="beforeDrawnCards_area">
              <div className="NoSpread_text_item">
                <p>第一張</p>
                <img src={TarotCard} alt="TarotCard" />
              </div>

              <div className="NoSpread_text_item">
                <p>第二張</p>
                <img src={TarotCard} alt="TarotCard" />
              </div>

              <div className="NoSpread_text_item">
                <p>第三張</p>
                <img src={TarotCard} alt="TarotCard" />
              </div>

              <div className="NoSpread_text_item">
                <p>第四張</p>
                <img src={TarotCard} alt="TarotCard" />
              </div>

              <div className="NoSpread_text_item">
                <p>第五張</p>
                <img src={TarotCard} alt="TarotCard" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Additional_container */}
      <div className="additional_container">
        <div className="additional_area">
          <h3>說明</h3>
          <p>
            無牌陣占卜法適合處理各種不同類型的問題。在這種占卜法中，五張牌並無固定的解釋，使用者可以根據問題的本質和個人直覺，自由地安排和詮釋這些牌的意義。請注意，塔羅牌占卜僅供參考，請保持理性的個人判斷，切勿過度迷信。
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrawNoSpreadCard;
