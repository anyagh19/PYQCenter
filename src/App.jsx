import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Year from "./pages/Year";
import Department from "./pages/Department";
import Subject from "./pages/Subject";

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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
