import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LegacyPage from "./pages/legacy";
import HomePage from "./pages/home";
import Navigation from "./components/Navigation";

const AboutPage = React.lazy(() => import("./pages/about"));
const ContactPage = React.lazy(() => import("./pages/contact"));

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
