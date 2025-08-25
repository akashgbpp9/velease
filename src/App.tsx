import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import AdvancedAnimatedCursor from "./components/AdvancedAnimatedCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";
import Projects from "./pages/Projects";
import ProjectSingle from "./pages/ProjectSingle";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import ImageGallery from "./pages/ImageGallery";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <AdvancedAnimatedCursor />
        {/* <Preloader /> */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceSingle />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectSingle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogSingle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/gallery" element={<ImageGallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
