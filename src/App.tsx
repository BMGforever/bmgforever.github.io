// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeanCanvasPage from "./pages/LeanCanvasPage";
import DailyAnalysisPage from "./pages/DailyAnalysisPage";
import ScrollToTop from "./components/ScrollToTop";
import KalorienTrackerPage from "./pages/kalorientrackerPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canvas" element={<LeanCanvasPage />} />
        <Route path="/analyse" element={<DailyAnalysisPage />} />
        <Route path="/kalorientracker" element={<KalorienTrackerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
