import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.svg";
import "./Disclaimer.scss";

const Disclaimer = () => {
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
    <div className="disclaimer_container">
      {/* Navbar_container */}
      <button className={`navbar_container ${scrolling ? "scroll" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </button>

      {/* Title_container */}
      <div className="title_container">
        <h1>免責聲明</h1>
        <h4>Disclaimer</h4>
      </div>

      {/* Info_container */}
      <div className="info_container">
        <div className="line"></div>

        <div className="item_box">
          <p>
            感謝您使用此塔羅牌應用程式 A New
            Day（以下簡稱「本應用程式」）。請注意，本應用程式僅供娛樂和娛樂目的使用，並且不應該被視為專業的心靈、健康或法律建議。在使用本應用程式的過程中，您所獲得的信息和建議僅代表程式的創建者或運營者的觀點，並不代表任何專業心理學、精神健康治療、醫學、法律或其他專業領域的意見。
          </p>
        </div>

        <div className="item_box">
          <p>
            建議您在做出任何生活決定之前，諮詢專業心靈導師、心理學家、醫生、律師或其他適當的專業人士。本應用程式的使用者應該自行負責評估所提供信息的準確性和適用性。
          </p>
        </div>

        <div className="item_box">
          <p>
            我們無法保證本應用程式的運作是不中斷、及時、安全和無錯誤的，也無法保證與本應用程式相關的伺服器免於病毒或其他有害元素的感染。使用者應該了解，使用本應用程式是在其自己的風險下進行的。
          </p>
        </div>

        <div className="item_box">
          <p>
            對於因使用本應用程式而導致的任何損失或損害，我們概不負責，包括但不限於直接、間接、附帶、特殊或相應的損失或利潤損失。
          </p>
        </div>

        <div className="item_box">
          <p>
            本應用程式的內容和功能可能會在沒有事先通知的情況下進行更改。我們保留隨時終止、暫停或修改本應用程式（或其任何部分）的權利，無論是否通知使用者。
          </p>
        </div>

        <div className="item_box">
          <p>
            使用本應用程式即表示您同意接受這些免責聲明的條款。如果您不同意這些條款，請停止使用本應用程式。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
