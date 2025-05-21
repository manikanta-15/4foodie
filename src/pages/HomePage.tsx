import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Clock, Filter } from 'lucide-react';

import FeaturedRecipes from '../components/home/FeaturedRecipes';
import CategorySection from '../components/home/CategorySection';
import HeroSection from '../components/home/HeroSection';
import PopularRecipes from '../components/home/PopularRecipes';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Find Recipe by Ingredients Panel */}
      <section className="py-16 bg-gradient-to-r from-accent-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Find Recipes with What You Have</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enter the ingredients you have on hand, and we'll suggest delicious Indian recipes you can make right now!
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
            <Link 
              to="/ingredient-search" 
              className="flex items-center justify-center space-x-2 bg-primary-500 text-gray-900 font-medium py-4 px-6 rounded-xl hover:bg-primary-600 transition-colors"
            >
              <Utensils className="h-5 w-5" />
              <span>Find Recipes by Ingredients</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategorySection />

      {/* Featured Recipes Section */}
      <FeaturedRecipes />

      {/* Recipe Filters */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="mb-4">Find Your Perfect Recipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse recipes by cooking time, meal type, or dietary preference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Filter by Time */}
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Meals</h3>
              <p className="text-gray-600 mb-4">Perfect for busy days when time is limited.</p>
              <Link 
                to="/search?time=30" 
                className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
              >
                <span>Under 30 minutes</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Filter by Diet */}
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <Filter className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dietary Needs</h3>
              <p className="text-gray-600 mb-4">Recipes that match your dietary preferences.</p>
              <div className="flex justify-center space-x-4">
                <Link 
                  to="/search?category=vegetarian" 
                  className="veg-tag"
                >
                  Vegetarian
                </Link>
                <Link 
                  to="/search?category=non-vegetarian" 
                  className="non-veg-tag"
                >
                  Non-Veg
                </Link>
              </div>
            </div>

            {/* Regional Cuisines */}
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                <Utensils className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Regional Cuisines</h3>
              <p className="text-gray-600 mb-4">Explore the diverse flavors of Indian cooking.</p>
              <div className="flex flex-wrap justify-center">
                <Link 
                  to="/search?region=north" 
                  className="ingredient-tag bg-orange-100 text-orange-800"
                >
                  North Indian
                </Link>
                <Link 
                  to="/search?region=south" 
                  className="ingredient-tag bg-yellow-100 text-yellow-800"
                >
                  South Indian
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <PopularRecipes />

      {/* Call to Action */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Cook Something Amazing?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-secondary-100">
            Start exploring our collection of authentic Indian recipes or find the perfect dish with ingredients you already have!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/search" 
              className="btn bg-white text-secondary-600 hover:bg-gray-100"
            >
              Browse All Recipes
            </Link>
            <Link 
              to="/ingredient-search" 
              className="btn bg-secondary-700 text-white hover:bg-secondary-800"
            >
              Search by Ingredients
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;