import "./App.css";
import Icon from "./icon";
function App() {
  return (
    <div className="container">
      <div className="front">
        <div className="front__top__card"></div>
        <div className="front__bottom__card">
          <div>
        <h3>IDIBEG RAHIMOV</h3>
          </div>
          <picture className="logo">
            <Icon backgroundColor="#000" color="#d8b806"/>
          </picture>
        </div>
      </div>
      <div className="back">
        <div className="contact">
          <span>900</span>
          <span>card.alif.tj</span>
        </div>
        <div className="security">
        </div>
      </div>
    </div>
  );
}

export default App;
