import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">Spice Route</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Discover recipes based on ingredients you already have. Specializing in authentic and simple Indian cuisine.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ingredient-search" className="text-gray-400 hover:text-white transition-colors">
                  Find by Ingredients
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-400 hover:text-white transition-colors">
                  Explore Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/search?category=north-indian" className="text-gray-400 hover:text-white transition-colors">
                  North Indian
                </Link>
              </li>
              <li>
                <Link to="/search?category=south-indian" className="text-gray-400 hover:text-white transition-colors">
                  South Indian
                </Link>
              </li>
              <li>
                <Link to="/search?category=vegetarian" className="text-gray-400 hover:text-white transition-colors">
                  Vegetarian
                </Link>
              </li>
              <li>
                <Link to="/search?category=non-vegetarian" className="text-gray-400 hover:text-white transition-colors">
                  Non-Vegetarian
                </Link>
              </li>
              <li>
                <Link to="/search?category=desserts" className="text-gray-400 hover:text-white transition-colors">
                  Desserts
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Get Recipe Updates</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive new recipe updates and cooking tips.
            </p>
            <form className="mb-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-primary-500 px-4 py-2 rounded-r-md text-gray-900 font-medium hover:bg-primary-600 transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Spice Route. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;