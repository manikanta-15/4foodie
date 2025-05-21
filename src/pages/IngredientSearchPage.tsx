import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { mockAvailableIngredients } from '../data/mockIngredients';
import RecipeCard from '../components/recipes/RecipeCard';
import { Recipe } from '../types/Recipe';
import { mockAllRecipes } from '../data/mockRecipes';

const IngredientSearchPage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestedRecipes, setSuggestedRecipes] = useState<Recipe[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Filter ingredients based on search term
  const filteredIngredients = searchTerm.trim()
    ? mockAvailableIngredients.filter(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !selectedIngredients.includes(ingredient)
      )
    : [];

  const addIngredient = (ingredient: string) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
      setSearchTerm('');
    }
  };

  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
  };

  const findRecipes = () => {
    if (selectedIngredients.length === 0) return;

    // This would normally be an API call with the selected ingredients
    // For now, we'll simulate matching by checking if recipes contain at least 2 of the selected ingredients
    const matchingRecipes = mockAllRecipes.filter(recipe => {
      const ingredientMatches = recipe.ingredients.filter(ingredient => 
        selectedIngredients.some(selected => 
          ingredient.name.toLowerCase().includes(selected.toLowerCase())
        )
      );
      return ingredientMatches.length >= 2;
    });

    setSuggestedRecipes(matchingRecipes);
    setHasSearched(true);
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-2">Find Recipes by Ingredients</h1>
          <p className="text-center text-gray-600 mb-8">
            Enter the ingredients you have, and we'll suggest recipes you can make!
          </p>

          {/* Ingredient Selection */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8">
            <div className="mb-6">
              <label htmlFor="ingredient-search" className="block text-sm font-medium text-gray-700 mb-2">
                Search for ingredients:
              </label>
              <div className="relative">
                <input
                  id="ingredient-search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type an ingredient..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Ingredient Suggestions */}
              {searchTerm.trim() !== '' && (
                <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-sm max-h-60 overflow-y-auto">
                  {filteredIngredients.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                      {filteredIngredients.map((ingredient, index) => (
                        <li 
                          key={index}
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                          onClick={() => addIngredient(ingredient)}
                        >
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-500">
                      No ingredients found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Selected Ingredients */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Your ingredients:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedIngredients.length > 0 ? (
                  selectedIngredients.map((ingredient, index) => (
                    <div 
                      key={index}
                      className="flex items-center bg-primary-100 text-primary-800 px-3 py-1 rounded-full"
                    >
                      <span>{ingredient}</span>
                      <button
                        type="button"
                        onClick={() => removeIngredient(ingredient)}
                        className="ml-1.5 text-primary-800 hover:text-primary-900"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No ingredients selected</p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={findRecipes}
              disabled={selectedIngredients.length === 0}
              className={`w-full py-3 rounded-lg font-medium ${
                selectedIngredients.length > 0
                  ? 'bg-primary-500 text-gray-900 hover:bg-primary-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors`}
            >
              Find Recipes
            </button>
          </div>

          {/* Recipe Results */}
          {hasSearched && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-6">
                {suggestedRecipes.length > 0 
                  ? `Recipes you can make (${suggestedRecipes.length})` 
                  : 'No matching recipes found'}
              </h2>
              
              {suggestedRecipes.length > 0 ? (
                <div className="recipe-grid">
                  {suggestedRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl text-center">
                  <p className="text-gray-600 mb-4">
                    We couldn't find any recipes matching your ingredients. Try adding more ingredients or exploring our recipe collection.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedIngredients([])}
                    className="btn-outline"
                  >
                    Clear Ingredients
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientSearchPage;