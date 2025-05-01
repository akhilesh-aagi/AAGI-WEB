import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import LegalPage from "./components/LegalPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-dark-200 transition-colors duration-300">
        <Toaster position="top-right" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Products />
                <Services />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/features" element={<Features />} />
          <Route path="/privacy-policy" element={<LegalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
