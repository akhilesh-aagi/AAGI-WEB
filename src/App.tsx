import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import CoreValues from "./components/CoreValues";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import LegalPage from "./components/LegalPage";
import Endsection from "./components/Endsection";

// Loading Component
const Loader = ({ progress }: { progress: number }) => (
  <div className="fixed inset-0 bg-white dark:bg-dark-200 flex items-center justify-center z-50">
    <div className="text-center">
      <div className="relative mb-6">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-blue-600">{Math.round(progress)}%</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AAGI</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Loading amazing content...</p>
      
      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages] = useState(16);

  useEffect(() => {
    // Preload critical images
    const imageUrls = [
      '/logo.png',
      '/logo.svg',
      '/HeroBack1.jpg',
      '/AboutUs.jpg',
      '/stats-bg.jpg',
      '/statsbg.jpg',
      '/whybg1.jpg',
      '/coachcommad.png',
      '/coachcommand1.png',
      '/mobile.svg',
      '/corevalue/CustomerSuccess .jpg',
      '/corevalue/excellence.jpg',
      '/corevalue/globalimpact.jpg',
      '/corevalue/innovation.jpg',
      '/corevalue/Integrity.jpg',
      '/corevalue/reliability.jpg'
    ];

    let loadedCount = 0;

    const loadImage = (src: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadedImages(loadedCount);
          resolve(src);
        };
        img.onerror = () => {
          loadedCount++;
          setLoadedImages(loadedCount);
          resolve(src);
        };
        img.src = src;
      });
    };

    // Load all images
    Promise.all(imageUrls.map(loadImage)).then(() => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });

    // Fallback: hide loader after 5 seconds even if images don't load
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  const progress = Math.round((loadedImages / totalImages) * 100);

  if (isLoading) {
    return <Loader progress={progress} />;
  }

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
                <Endsection />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/product/coachcommand/features" element={<Features />} />
          <Route path="/privacy-policy" element={<LegalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
