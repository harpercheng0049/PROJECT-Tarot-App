import { Link } from "react-router-dom";
import "./Home.scss";
import img_bms from "../Image/img_bms.svg";
import img_time from "../Image/img_time.svg";
import img_nospread from "../Image/img_nospread.svg";
import Logo from "../Image/Logo.svg";
import Arrow from "../Image/Arrow_icon.svg";
import { useEffect, useState } from "react";

const Home = () => {
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
    <div className="home_container">
      <button className={`navbar ${scrolling ? "scroll" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </button>

      <div className="main_containter">
        <div className="title_containter">
          <h1>Awaken your inner wisdom with A New Day</h1>
          <h3>Let Tarot guide you through the big and small things in life</h3>
          <div className="drawone_containter">
            <span></span>
            <p>我想要快速的抽一張牌:</p>
            <button className="btn_drawOne">
              <Link to="/drawonecard">抽牌</Link>
            </button>
          </div>
        </div>

        <div className="links_containter">
          {/* Three_containter */}
          <div className="three_containter">
            <button className="btn_drawBMS">
              <Link to="/drawbmscard">
                <div className="drawbmscard">
                  <h3>身心靈占卜</h3>
                  <p className="txt_name">Mind, Body, Spirit Spread</p>
                  <p className="txt_card">占卜牌數: 3張牌</p>
                  <img src={img_bms} alt="img_bms" />
                </div>
              </Link>
            </button>

            <button className="btn_drawTime">
              <Link to="/drawtimecard">
                <div className="drawtimecard">
                  <h3>時間流占卜</h3>
                  <p className="txt_name">Past, Present, Future Spread</p>
                  <p className="txt_card">占卜牌數: 3張牌</p>
                  <img src={img_time} alt="img_time" />
                </div>
              </Link>
            </button>

            <button className="btn_drawFive">
              <Link to="/drawnospreadcard">
                <div className="drawnospreadcard">
                  <h3>無牌陣占卜</h3>
                  <p className="txt_name">Five-Card Spread</p>
                  <p className="txt_card">占卜牌數: 5張牌</p>
                  <img src={img_nospread} alt="img_nospread" />
                </div>
              </Link>
            </button>
          </div>

          {/* second_containter */}
          <div className="second_containter">
            <button className="btn_notice">
              <Link to="/notice">
                <div className="btn_notice_box">
                  <img src={Arrow} alt="arrow-icon" />
                  <p>占卜前須知 & 注意事項</p>
                </div>
              </Link>
            </button>

            <button className="btn_aboutMe">
              <Link to="/aboutMe">
                <div className="btn_aboutMe_box">
                  <img src={Arrow} alt="arrow-icon" />
                  <p>關於作者</p>
                </div>
              </Link>
            </button>

            <button className="btn_disclaimer">
              <Link to="/disclaimer">
                <div className="btn_disclaimer_box">
                  <img src={Arrow} alt="arrow-icon" />
                  <p>免責聲明</p>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
