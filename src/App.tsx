import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Routes from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import StoryPage from "./pages/StoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
