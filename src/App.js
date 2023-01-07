import Audio from "./Audio.js";
import Background from "./Background.js";
import MainCard from "./card/MainCard.js";
import "./static/css/App.css";
function App() {
  return (
    <div>
      <Background/>
      <MainCard/>
      <Audio/>
    </div>
  );
}

export default App;
