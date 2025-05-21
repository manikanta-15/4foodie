import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../recipes/RecipeCard';
import { Recipe } from '../../types/Recipe';
import { mockFeaturedRecipes } from '../../data/mockRecipes';

const FeaturedRecipes = () => {
  const recipes: Recipe[] = mockFeaturedRecipes;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="mb-2">Featured Recipes</h2>
            <p className="text-gray-600">
              Our most popular and beloved Indian recipes
            </p>
          </div>
          <Link 
            to="/search" 
            className="hidden md:flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            View all recipes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="recipe-grid">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/search" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            View all recipes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;