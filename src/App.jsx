import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="flex flex-col h-screen bg-green-300">
      <Header />
      <Slider />
      <Main />
    </div>
  );
}

export default App;
