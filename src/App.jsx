import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Year from "./pages/Year";
import Department from "./pages/Department";
import Subject from "./pages/Subject";
import DownloadManual from "./components/DownloadManual";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/year/:year" element={<Year />} />
          <Route path="/year/:year/:department" element={<Department />} />
          <Route path="/year/:year/:department/:subject" element={<Subject />} />
          <Route path="/download/manual" element={<DownloadManual />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
