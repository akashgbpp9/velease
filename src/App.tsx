import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import AdvancedAnimatedCursor from "./components/AdvancedAnimatedCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import SolutionSingle from "./pages/SolutionSingle";
import Projects from "./pages/Projects";
import ProjectSingle from "./pages/ProjectSingle";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import FAQs from "./pages/FAQs";
import ImageGallery from "./pages/ImageGallery";
import NotFound from "./pages/NotFound";
import "@fontsource/source-sans-pro"; // Defaults to weight 400
import "@fontsource/source-sans-pro/400.css"; // Specify weight
import "@fontsource/source-sans-pro/400-italic.css"; // Specify weight and style

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <AdvancedAnimatedCursor />
          {/* <Preloader /> */}
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:id" element={<SolutionSingle />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectSingle />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogSingle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/gallery" element={<ImageGallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
