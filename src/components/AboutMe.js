import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.svg";
import "./AboutMe.scss";

const AboutMe = () => {
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
    <div className="aboutMe_container">
      {/* Navbar_container */}
      <button className={`navbar_container ${scrolling ? "scroll" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </button>

      {/* Title_container */}
      <div className="title_container">
        <h1>關於作者</h1>
        <h4>About The Author</h4>
      </div>

      {/* Foreword */}
      <div className="foreword_container">
        <p>
          Hi 我是 Harper，A New Day
          是一款基於React與Redux技術的塔羅抽牌App，提供四種常用的抽牌模式。
        </p>
        <p>
          在開發過程中，我重視的是簡單易懂的占卜流程，希望打造一個方便使用者隨時占卜的App。簡單易用的界面、適當的解釋使用方式、提供多樣的占卜選項，讓使用者可以依照自身需求隨時進行占卜。
        </p>
        <p>
          期望透過這個App，讓使用者能夠輕鬆獲取指引與建議，實現個人成長的目標。
        </p>
      </div>

      {/* Info_container */}
      <div className="info_container">
        <div className="box_item">
          <h4>UI DESIGN - Figma</h4>
          <ul>
            <li>APP Wireframe 架構</li>
            <li>元件繪製: Logo、圖案</li>
            <li>Component page 設計</li>
          </ul>
        </div>

        <div className="box_item">
          <h4>WEB SKILLS - React</h4>
          <ul>
            <li>create-react-app 建立 react 專案</li>
            <li>react-hook: useEffect, useState</li>
          </ul>
        </div>

        <div className="box_item">
          <h4>WEB SKILLS - React Redux</h4>
          <ul>
            <li>使用 Redux Toolkit 整合專案</li>
            <li>創建 Redux Store</li>
            <li>創建 Redux State Slice</li>
            <li>reducers: 統一處理特定actions的函數</li>
            <li>
              每個 Components 中引入 useDispatch, useSelector 用來提取Redux
              store資料與呼叫之前定義的functions
            </li>
          </ul>
        </div>

        <div className="box_item">
          <h4>WEB SKILLS - React Router</h4>
          <ul>
            <li>定義每個 Components 的路徑</li>
            <li>定義對應的 Components 頁面內容</li>
          </ul>
        </div>

        <div className="box_item">
          <h4>WEB SKILLS - SCSS</h4>
          <ul>
            <li>變數 Variables: 統一管理，常用的字體大小&顏色</li>
            <li>巢狀結構 Nesting: 層次結構易讀、易寫、易維護</li>
            <li>RWD - 4種切版: 1920*1080 / 1440*900 / 1024*768 / 414*896</li>
          </ul>
        </div>

        <div className="box_item">
          <h4>WEB SKILLS - CodeSandbox</h4>
          <ul>
            <p>CodeSandbox 優點:</p>
            <li>即時預覽</li>
            <li>支援多種框架: 包括 React、Vue、Angular 等</li>
            <li>
              零配置: 方便加入專案所需的 Dependency，不需要在本地安裝任何東西
            </li>
            <li>支援實時預覽多平台: 例如手機、平板電腦、桌面電腦</li>
            <li>整合版本控制: 整合了版本控制系統，如 Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
