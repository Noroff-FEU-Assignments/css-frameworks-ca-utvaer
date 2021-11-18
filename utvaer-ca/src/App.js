import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./sass/style.scss";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import MainNav from "./components/layout/MainNav";
import Footer from "./components/layout/Footer";

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
