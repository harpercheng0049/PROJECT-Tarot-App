import { useDispatch, useSelector } from "react-redux";
import { drawBMSCard, clearDrawnCard } from "../cardsSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.svg";
import "./DrawBMSCard.scss";
import TarotCard from "../Image/Tarot_card.png";

const DrawBMSCard = () => {
  // 滾動頁面
  const [scrolling, setScrolling] = useState(false);

  const dispatch = useDispatch();

  // 這裡的 cards 是 store 裡面的 reducer
  const drawCards = useSelector((state) => state.cards.initialDrawCards);

  /* useEffect 鉤子，你可以在元件載入（或刷新）時執行一些操作，
     也可以在元件卸載（或被取代）時執行一些清理操作 */
  useEffect(() => {
    // 在元件載入時清空卡片狀態
    dispatch(clearDrawnCard());

    // 在元件卸載時清空卡片狀態（防止回退時狀態仍然保留）
    return () => {
      dispatch(clearDrawnCard());
    };
  }, [dispatch]);

  const handleDrawThreeCards = () => {
    dispatch(drawBMSCard());
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

  return (
    <div className="drawBMSCard_container">
      {/* Navbar_container */}
      <button className={`navbar_container ${scrolling ? "scroll" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </button>

      {/* Title_container */}
      <div className="title_container">
        <h1>身心靈占卜</h1>
        <h4>Mind, Body, Spirit Spread</h4>
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
              <p>1. 我想知道我目前的身心靈狀況如何?</p>
              <p>
                2. 我想知道我的寵物目前的身心靈狀況如何?
                (可占卜與自己朝夕相處的寵物情況)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Start_container */}
      <div className="start_container">
        <button onClick={handleDrawThreeCards}>開始抽牌</button>
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
              <div className="BMSCard_text_item">
                <p>
                  當事人現階段的<b>身體</b>狀況
                </p>
                <img src={TarotCard} alt="TarotCard" />
              </div>

              <div className="BMSCard_text_item">
                <p>
                  當事人現階段的<b>心理</b>狀態
                </p>
                <img src={TarotCard} alt="TarotCard" />
              </div>

              <div className="BMSCard_text_item">
                <p>
                  當事人現階段的<b>精神&理想&目標</b>狀態
                </p>
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
            身心靈牌陣分析的是當下的狀況，當情況改變之後隨時可以再算一次。
            請注意，塔羅牌占卜僅供參考，並非醫療行為，不能替代專業醫師的診斷。
            如果您有任何身心不適的症狀，請您儘速就醫，以免延誤病情！
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrawBMSCard;
