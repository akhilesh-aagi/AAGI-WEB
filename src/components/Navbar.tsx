import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo.svg"
              alt="AATVAAS GRANGER INTERNATIONALS"
              className="hidden md:block h-16 sm:h-20 w-auto transform transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/mobile.svg"
              alt="AATVAAS GRANGER INTERNATIONALS"
              className="md:hidden h-12 w-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a
              href="#home"
              className={`${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-white/80"
              } transition-colors`}
           >
              Home
            </a>
            <a
              href="#about"
              className={`${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-white/80"
              } transition-colors`}
            >
              About Us
            </a>
            <a
              href="#products"
              className={`${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-white/80"
              } transition-colors`}
            >
              Products
            </a>
            <a
              href="#services"
              className={`${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-white/80"
              } transition-colors`}
            >
              Services
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
              }`}
            >
              {isDarkMode ? (
                <Sun className={`w-5 h-5 ${isScrolled ? "text-gray-200" : "text-white"}`} />
              ) : (
                <Moon className={`w-5 h-5 ${isScrolled ? "text-gray-800" : "text-white"}`} />
              )}
            </button>
            <a
              href="#contact"
              className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
              }`}
            >
              {isDarkMode ? (
                <Sun className={`w-5 h-5 ${isScrolled ? "text-gray-200" : "text-white"}`} />
              ) : (
                <Moon className={`w-5 h-5 ${isScrolled ? "text-gray-800" : "text-white"}`} />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? "text-gray-800" : "text-white"} p-2`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a
              href="#home"
              className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-dark-100 transition-all"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-dark-100 transition-all"
            >
              About Us
            </a>
            <a
              href="#products"
              className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-dark-100 transition-all"
            >
              Products
            </a>
            <a
              href="#services"
              className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-dark-100 transition-all"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
