import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../recipes/RecipeCard';
import { Recipe } from '../../types/Recipe';
import { mockPopularRecipes } from '../../data/mockRecipes';

const PopularRecipes = () => {
  const recipes: Recipe[] = mockPopularRecipes;

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Popular Recipes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Top-rated authentic Indian recipes loved by our community
          </p>
        </div>

        <div className="recipe-grid">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;