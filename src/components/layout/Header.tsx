import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChefHat } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-secondary-500' : 'text-gray-700';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-gray-900">Spice Route</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className={`font-medium ${isActive('/')}`}>
                Home
              </Link>
              <Link to="/ingredient-search" className={`font-medium ${isActive('/ingredient-search')}`}>
                Find by Ingredients
              </Link>
              <Link to="/search" className={`font-medium ${isActive('/search')}`}>
                Explore Recipes
              </Link>
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <form onSubmit={handleSearch} className="relative mb-6">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className={`font-medium ${isActive('/')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/ingredient-search"
                className={`font-medium ${isActive('/ingredient-search')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Find by Ingredients
              </Link>
              <Link 
                to="/search"
                className={`font-medium ${isActive('/search')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Explore Recipes
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;