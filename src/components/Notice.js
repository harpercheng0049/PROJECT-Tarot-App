import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.svg";
import "./Notice.scss";

const Notice = () => {
  // 滾動頁面
  const [scrolling, setScrolling] = useState(false);

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
    <div className="notice_container">
      {/* Navbar_container */}
      <button className={`navbar_container ${scrolling ? "scroll" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </button>

      {/* Title_container */}
      <div className="title_container">
        <h1>占卜前須知&注意事項</h1>
        <h4>Things to Know Before Divination</h4>
      </div>

      {/* Info_container */}
      <div className="info_container">
        <div className="box_item">
          <h4 className="box_item_h4">避免重複抽牌</h4>
          <p className="box_item_p">
            當你為了追求滿意的結果，反覆重複抽牌同一個問題時往往會失去對牌意的清晰認識。因此，在進行塔羅占卜時，應該避免反覆重複抽牌同一個問題。
          </p>
        </div>

        <div className="box_item">
          <h4 className="box_item_h4">問卜者的身心狀態</h4>
          <p className="box_item_p">
            當身心狀況處於不佳狀態時，對占卜的準確度造成顯著影響。不論是生病、情緒波動、憤怒或疲憊，這些狀態都可能干擾占卜者的專注力，使其難以集中精神理解牌面所傳達的信息。結果，這樣的狀況可能導致占卜結果的不準確性。
          </p>
        </div>

        <div className="box_item">
          <h4 className="box_item_h4">問卜者的心態</h4>
          <p className="box_item_p">
            進行占卜時，心態至關重要。首先，如果持著好奇或只是想測試占卜師能力的態度，而非真心渴望問題解答，可能會導致不正確的結果。其次，占卜者應該避免試圖窺探他人或懷有惡意。若不願透露個人資訊，可以保持沉默，但絕不能撒謊或描述不實的狀況，以免影響占卜結果的準確性。真誠和尊重是占卜過程中不可或缺的元素。
          </p>
        </div>

        <div className="box_item">
          <h4 className="box_item_h4">設定問題的重要性</h4>
          <div className="box_item_div">
            <p>在設定占卜問題時，請特別注意以下三點：</p>
            <div className="texts_area">
              <p>
                (1)確定問題的時間範圍，避免問及過於遙遠的事情，例如一年之後的事件。
              </p>
              <p>(2)避免使用過於籠統或模糊的問題描述，應詳細明確地提出問題。</p>
              <p>
                (3)確保你在事件中具有一定的主導權，例如，問自己是否要接受某人的告白，前提是對方已經提出，而你正在考慮如何回應。這樣的問題設定有助於獲得更具體和有意義的占卜結果。
              </p>
            </div>
          </div>
        </div>

        <div className="box_item">
          <h4 className="box_item_h4">占卜時的環境</h4>
          <p className="box_item_p">
            不論是進行面對面還是線上占卜，都應選擇安靜的環境，以避免外界干擾。特別是當問卜者希望保持隱私時，更需要謹慎選擇占卜的場所。這樣可以確保占卜過程的專注度，使其更加深入和準確。
          </p>
        </div>

        <div className="box_item">
          <h4 className="box_item_h4">占卜的正確態度</h4>
          <p className="box_item_p">
            塔羅占卜不是宿命論，它提供的只是一個參考，而非絕對的預言。事實上，占卜結果能夠幫助我們認識到我們自己的內在狀態和潛在的問題，但這些結果不應該被視為無法改變的預兆。我們相信「事在人為」，只要我們有意識地去改變自己的思維、行為和生活習慣，未來的發展就在我們自己的手中。因此，在占卜結果面前，我們應該保持開放和積極的態度，並把它作為一個啟示，去努力改變自己的命運。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
