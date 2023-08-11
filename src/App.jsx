import TriviaPage from "./pages/TriviaPage";
import React from "react";
import IntroPage from "./pages/IntroPage";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/trivia/" element = { <TriviaPage/>} />
          <Route path="/trivia/:id" element = { <TriviaPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
