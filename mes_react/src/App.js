import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Speak from "./components/Speak";
import Read from "./components/Read";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speak" element={<Speak />} />
        <Route path="/read" element={<Read />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
