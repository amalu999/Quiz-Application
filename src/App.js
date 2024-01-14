import "./App.css";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";
import { NoPage } from "./Components/NoPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
