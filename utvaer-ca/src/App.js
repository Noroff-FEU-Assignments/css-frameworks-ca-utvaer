import * as React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import MainNav from "./components/MainNav";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
