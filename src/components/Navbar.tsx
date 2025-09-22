import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo.svg"
              alt="AATVAAS GRANGER INTERNATIONALS"
              className="hidden md:block h-12 md:h-16 w-auto transform transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/mobile.svg"
              alt="AATVAAS GRANGER INTERNATIONALS"
              className="md:hidden h-8 w-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a
              href="#home"
              className={`${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-white/80"
              } transition-colors font-medium`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-white/80"
              } transition-colors font-medium`}
            >
              About
            </a>
            <a
              href="#products"
              className={`${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-white/80"
              } transition-colors font-medium`}
            >
              Products
            </a>
            <a
              href="#services"
              className={`${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-white/80"
              } transition-colors font-medium`}
            >
              Services
            </a>
            <a
              href="#contact"
              className="bg-blue-900 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } p-2 rounded-md hover:bg-white/10 transition-colors`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white shadow-lg border-t z-50 w-full">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#home"
              className="block px-4 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              onClick={closeMobileMenu}
            >
              About Us
            </a>
            <a
              href="#products"
              className="block px-4 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              onClick={closeMobileMenu}
            >
              Products
            </a>
            <a
              href="#services"
              className="block px-4 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
              onClick={closeMobileMenu}
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
