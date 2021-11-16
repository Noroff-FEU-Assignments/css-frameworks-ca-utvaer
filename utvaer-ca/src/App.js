import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import MainNav from "./components/MainNav";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
