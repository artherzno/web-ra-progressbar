import './App.scss';

import Dolphin1 from './assets/images/Dolphin-1.png';
import Dolphin2 from './assets/images/Dolphin-2.png';
import Dolphin3 from './assets/images/Dolphin-3.png';
import RubberRing1 from './assets/images/Rubber-ring-1.png';

function App() {
  return (
    <div className="App">
      <div className="content _top" style={{textAlign: 'center'}}>
        <svg viewBox="0 -18 100 70" width="100%" height="50px">
          <text x="50%" y="50%" text-anchor="middle" class="svgStroke">สแกน <tspan class="svgStroke fill-blue">มาร์ลโบโร่</tspan> และ <tspan class="svgStroke fill-blue">แอล แอนด์ เอ็ม ตัวใหญ่</tspan> ทุกรสชาติ</text>
          <text x="50%" y="50%" text-anchor="middle" class="svgText">สแกน <tspan class="svgText fill-blue">มาร์ลโบโร่</tspan> และ <tspan class="svgText fill-blue">แอล แอนด์ เอ็ม ตัวใหญ่</tspan> ทุกรสชาติ</text>
        </svg>
        <svg viewBox="0 -18 100 80"  width="100%" height="36px">
          <text x="50%" y="30%" text-anchor="middle" class="svgStroke">ตั้งแต่ X-XX X.X. 64</text>
          <text x="50%" y="30%" text-anchor="middle" class="svgText fill-red">ตั้งแต่ X-XX X.X. 64</text>
        </svg>
        <div className="bubble">
          <svg viewBox="0 -10 100 70" width="100%" height="40px">
            <text x="50%" y="50%" text-anchor="middle" class="svgStroke">ครบ <tspan class="svgStroke fill-blue">XX</tspan> แถว รับ <tspan class="svgStroke fill-blue">2,000</tspan> คะแนน</text>
            <text x="50%" y="50%" text-anchor="middle" class="svgText">ครบ <tspan class="svgText fill-blue">XX</tspan> แถว รับ <tspan class="svgText fill-blue">2,000</tspan> คะแนน</text>
          </svg>
        </div>
      </div>
      <div className="dolphin-box">
        <img class="dolphin _1" src={Dolphin1} alt="Progress Bar"/>
        <img class="rubberring _1" src={RubberRing1} alt="Progress Bar"/>
      </div>
    </div>
  );
}

export default App;
