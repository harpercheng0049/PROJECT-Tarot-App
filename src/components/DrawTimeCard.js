import { useDispatch, useSelector } from "react-redux";
import { drawTimeCard, clearDrawnCard } from "../cardsSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.svg";
import "./DrawTimeCard.scss";
import TarotCard from "../Image/Tarot_card.png";

const DrawTimeCard = () => {
  // 滾動頁面
  const [scrolling, setScrolling] = useState(false);

  const dispatch = useDispatch();
  const drawCards = useSelector((state) => state.cards.initialDrawCards);

  const handleDrawTimeCards = () => {
    dispatch(drawTimeCard());
  };

  useEffect(() => {
    dispatch(clearDrawnCard());

    return () => {
      dispatch(clearDrawnCard);
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
    <div className="drawTimeCard_container">
      {/* Navbar_container */}
      <button className={`navbar_container ${scrolling ? "scroll" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </button>

      {/* Title_container */}
      <div className="title_container">
        <h1>時間流占卜</h1>
        <h4>Past, Present, Future Spread</h4>
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
              <p>1.我與某人近期有沒有機會成為男女朋友?</p>
              <p>2.我負責的專案提案，會不會順利通過?</p>
              <p>3.我近期能夠順利的找到新工作嗎？</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start_container */}
      <div className="start_container">
        <button onClick={handleDrawTimeCards}>開始抽牌</button>
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
              <div className="TimeCard_text_item">
                <p>
                  這件事情<b>過去</b>的狀況
                </p>
                <img src={TarotCard} alt="TarotCard" />
              </div>

              <div className="TimeCard_text_item">
                <p>
                  這件事情<b>現在</b>的狀況或處境
                </p>
                <img src={TarotCard} alt="TarotCard" />
              </div>

              <div className="TimeCard_text_item">
                <p>
                  這件事情<b>未來</b>的發展
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
            時間流牌陣通常用於探詢某事隨著時間推移所帶來的變化，例如:單一事件、感情、事業的未來走向等。
            請注意，塔羅牌占卜僅供參考，應保持理性判斷，避免過度迷信。
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrawTimeCard;
