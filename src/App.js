import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawOneCard from "./components/DrawOneCard";
import DrawBMSCard from "./components/DrawBMSCard";
import DrawTimeCard from "./components/DrawTimeCard";
import DrawNoSpreadCard from "./components/DrawNoSpreadCard";
import Home from "./components/Home";
import Notice from "./components/Notice";
import AboutMe from "./components/AboutMe";
import Disclaimer from "./components/Disclaimer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drawonecard" element={<DrawOneCard />} />
          <Route path="/drawbmscard" element={<DrawBMSCard />} />
          <Route path="/drawtimecard" element={<DrawTimeCard />} />
          <Route path="/drawnospreadcard" element={<DrawNoSpreadCard />} />

          <Route path="/notice" element={<Notice />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
