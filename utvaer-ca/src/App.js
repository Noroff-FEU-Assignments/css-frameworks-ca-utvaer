import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
