import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
