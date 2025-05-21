import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import RecipeCard from '../components/recipes/RecipeCard';
import { Recipe } from '../types/Recipe';
import { mockAllRecipes } from '../data/mockRecipes';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const initialCategory = queryParams.get('category') || '';
  const initialRegion = queryParams.get('region') || '';
  const initialTime = queryParams.get('time') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [region, setRegion] = useState(initialRegion);
  const [cookTime, setCookTime] = useState(initialTime);
  const [dietType, setDietType] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter recipes based on search criteria
  useEffect(() => {
    let results = [...mockAllRecipes];

    // Filter by search query
    if (searchQuery) {
      results = results.filter(recipe => 
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (category) {
      results = results.filter(recipe => 
        recipe.category.toLowerCase() === category.toLowerCase() ||
        recipe.tags.some(tag => tag.toLowerCase() === category.toLowerCase())
      );
    }

    // Filter by region
    if (region) {
      results = results.filter(recipe => 
        recipe.region.toLowerCase().includes(region.toLowerCase())
      );
    }

    // Filter by cook time
    if (cookTime) {
      const maxTime = parseInt(cookTime);
      if (!isNaN(maxTime)) {
        results = results.filter(recipe => recipe.cookTime <= maxTime);
      }
    }

    // Filter by diet type
    if (dietType) {
      if (dietType === 'vegetarian') {
        results = results.filter(recipe => recipe.isVegetarian);
      } else if (dietType === 'non-vegetarian') {
        results = results.filter(recipe => !recipe.isVegetarian);
      }
    }

    setFilteredRecipes(results);
  }, [searchQuery, category, region, cookTime, dietType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The useEffect will handle the filtering
  };

  const clearFilters = () => {
    setCategory('');
    setRegion('');
    setCookTime('');
    setDietType('');
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-center mb-2">Search Recipes</h1>
          <p className="text-center text-gray-600 mb-6">
            Find the perfect recipe for your next meal
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </form>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
            >
              <Filter className="h-5 w-5" />
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                {(category || region || cookTime || dietType) && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {['street-food', 'desserts', 'breakfast', 'dinner'].map((cat) => (
                    <div key={cat} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${cat}`}
                        name="category"
                        checked={category === cat}
                        onChange={() => setCategory(cat)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`category-${cat}`} className="ml-2 text-sm text-gray-700 capitalize">
                        {cat.replace('-', ' ')}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Region Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Region</h4>
                <div className="space-y-2">
                  {['north', 'south', 'east', 'west'].map((reg) => (
                    <div key={reg} className="flex items-center">
                      <input
                        type="radio"
                        id={`region-${reg}`}
                        name="region"
                        checked={region === reg}
                        onChange={() => setRegion(reg)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`region-${reg}`} className="ml-2 text-sm text-gray-700 capitalize">
                        {reg} Indian
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cooking Time Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Cooking Time</h4>
                <div className="space-y-2">
                  {[
                    { value: '15', label: 'Under 15 minutes' },
                    { value: '30', label: 'Under 30 minutes' },
                    { value: '60', label: 'Under 1 hour' }
                  ].map((time) => (
                    <div key={time.value} className="flex items-center">
                      <input
                        type="radio"
                        id={`time-${time.value}`}
                        name="cookTime"
                        checked={cookTime === time.value}
                        onChange={() => setCookTime(time.value)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`time-${time.value}`} className="ml-2 text-sm text-gray-700">
                        {time.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diet Type Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Diet Type</h4>
                <div className="space-y-2">
                  {[
                    { value: 'vegetarian', label: 'Vegetarian' },
                    { value: 'non-vegetarian', label: 'Non-Vegetarian' }
                  ].map((diet) => (
                    <div key={diet.value} className="flex items-center">
                      <input
                        type="radio"
                        id={`diet-${diet.value}`}
                        name="dietType"
                        checked={dietType === diet.value}
                        onChange={() => setDietType(diet.value)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`diet-${diet.value}`} className="ml-2 text-sm text-gray-700">
                        {diet.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recipe Results */}
          <div className="md:w-3/4">
            {/* Active Filters */}
            {(category || region || cookTime || dietType) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {category && (
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm text-gray-700">Category: {category.replace('-', ' ')}</span>
                    <button
                      onClick={() => setCategory('')}
                      className="ml-1.5 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {region && (
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm text-gray-700">Region: {region} Indian</span>
                    <button
                      onClick={() => setRegion('')}
                      className="ml-1.5 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {cookTime && (
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm text-gray-700">Time: Under {cookTime} min</span>
                    <button
                      onClick={() => setCookTime('')}
                      className="ml-1.5 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {dietType && (
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm text-gray-700">Diet: {dietType}</span>
                    <button
                      onClick={() => setDietType('')}
                      className="ml-1.5 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Results Count */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold">
                {filteredRecipes.length} {filteredRecipes.length === 1 ? 'Recipe' : 'Recipes'} Found
              </h2>
            </div>

            {/* Recipe Grid */}
            {filteredRecipes.length > 0 ? (
              <div className="recipe-grid">
                {filteredRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl text-center">
                <p className="text-gray-600 mb-4">
                  No recipes found matching your criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;