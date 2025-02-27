
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { SearchIcon, User, Menu, X, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, signOut } = useAuth();
  const location = useLocation();

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Track scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="content-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <h1 className="text-2xl font-bold text-decor-primary font-serif tracking-tight">
              Decor<span className="text-decor-accent">Mind</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-decor-accent ${
                location.pathname === "/" ? "text-decor-accent" : "text-decor-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-decor-accent ${
                location.pathname === "/products" ? "text-decor-accent" : "text-decor-primary"
              }`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-decor-accent ${
                location.pathname === "/contact" ? "text-decor-accent" : "text-decor-primary"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/support"
              className={`text-sm font-medium transition-colors hover:text-decor-accent ${
                location.pathname === "/support" ? "text-decor-accent" : "text-decor-primary"
              }`}
            >
              Support
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <Button variant="ghost" size="icon" className="hover:bg-decor-light">
              <ShoppingCart className="h-5 w-5 text-decor-primary" />
            </Button>
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" className="text-sm font-medium">
                  <User className="h-4 w-4 mr-2" />
                  {user?.name}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={signOut}
                  className="border-decor-gray-light hover:bg-decor-light text-sm"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/signin">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:bg-decor-light text-sm"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="bg-decor-accent hover:bg-decor-accent/90 text-sm"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <Button variant="ghost" size="icon" className="hover:bg-decor-light">
              <SearchIcon className="h-5 w-5 text-decor-primary" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-decor-light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-decor-primary" />
              ) : (
                <Menu className="h-5 w-5 text-decor-primary" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-5 animate-slideUp">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-decor-accent ${
                location.pathname === "/" ? "text-decor-accent" : "text-decor-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-decor-accent ${
                location.pathname === "/products" ? "text-decor-accent" : "text-decor-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-decor-accent ${
                location.pathname === "/contact" ? "text-decor-accent" : "text-decor-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/support"
              className={`text-sm font-medium transition-colors hover:text-decor-accent ${
                location.pathname === "/support" ? "text-decor-accent" : "text-decor-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <div className="border-t border-decor-gray-light pt-3 mt-2">
              {isAuthenticated ? (
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-decor-primary" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={signOut}
                    className="border-decor-gray-light hover:bg-decor-light text-sm w-full justify-start"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/signin" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-decor-gray-light hover:bg-decor-light text-sm w-full"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button 
                      variant="default" 
                      size="sm"
                      className="bg-decor-accent hover:bg-decor-accent/90 text-sm w-full"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
