import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "src/page/detail";
import Home from "src/page/home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
