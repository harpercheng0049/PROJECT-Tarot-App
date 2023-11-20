import { useDispatch, useSelector } from "react-redux";
import { drawOneCard, clearDrawnCard } from "../cardsSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.svg";
import "./DrawOneCard.scss";
import TarotCard from "../Image/Tarot_card.png";

const DrawOneCard = () => {
  // 滾動頁面
  const [scrolling, setScrolling] = useState(false);

  const dispatch = useDispatch();

  // useSelector，它允許你從 Redux store 中選擇（或說提取）資料
  /* state.cards 指的是 Redux store 中的 cards slice，而 initialDrawCards
  是這個 slice 中的一個屬性，代表了已經抽取的塔羅牌組 */
  const drawCards = useSelector((state) => state.cards.initialDrawCards);

  const handleDrawOneCard = () => {
    // 在 dispatch 裡面，呼叫之前定義的functions
    dispatch(drawOneCard());
  };

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

  useEffect(() => {
    dispatch(clearDrawnCard());

    return () => {
      dispatch(clearDrawnCard);
    };
  }, [dispatch]);

  return (
    <div className="drawOneCard_container">
      {/* Navbar_container */}
      <button className={`navbar_container ${scrolling ? "scroll" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </button>

      {/* Title_container */}
      <div className="title_container">
        <h1>快速抽一張牌</h1>
        <h4>One-Card Spread</h4>
      </div>

      {/* Info_container */}
      <div className="info_container">
        {/* Steps_area */}
        <div className="steps_area">
          <div className="title_area">
            <h4>占卜步驟</h4>
          </div>

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
              <p>1. 與另外一半吵架了，最近能和好嗎?</p>
              <p>2. 某項目標，最近能達成嗎？</p>
              <p>3. 明天考試的科目，我能順利拿高分嗎？</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start_container */}
      <div className="start_container">
        <button onClick={handleDrawOneCard}>開始抽牌</button>
        <div className="drawNewCard">
          {drawCards.length > 0 ? (
            drawCards.map((card) => (
              <div className="newCard_area" key={card.id}>
                <p className="OneCard_text_item">問題的答案</p>
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
            <div>
              <p className="OneCard_text_item">問題的答案</p>
              <img
                className="OneCard_text_card"
                src={TarotCard}
                alt="TarotCard"
              />
            </div>
          )}
        </div>
      </div>

      {/* Additional_container */}
      <div className="additional_container">
        <div className="additional_area">
          <h3>說明</h3>
          <p>
            只使用一張牌的牌陣適用於簡單問題，例如問題的答案可以是「好」、「不好」、「是」或「不是」。
            占卜結果可以根據牌的原始意義解釋，或者根據問題的內容定義其意義。
            請注意，塔羅牌占卜僅供參考，請保持理性判斷，切勿過度迷信。
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrawOneCard;
