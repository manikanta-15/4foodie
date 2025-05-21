import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChefHat, Heart } from 'lucide-react';
import { Recipe } from '../../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="card group h-full transition-all duration-300 hover:-translate-y-1">
      <Link to={`/recipe/${recipe.id}`} className="block">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${recipe.isVegetarian ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {recipe.isVegetarian ? 'Veg' : 'Non-Veg'}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600 transition-colors">
              {recipe.name}
            </h3>
            <button className="text-gray-400 hover:text-secondary-500 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
          
          <div className="flex items-center text-sm text-gray-500 mt-auto">
            <div className="flex items-center mr-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>{recipe.cookTime} mins</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="h-4 w-4 mr-1" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
          
          {recipe.tags && recipe.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap">
              {recipe.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="ingredient-tag bg-gray-100 text-gray-700">
                  {tag}
                </span>
              ))}
              {recipe.tags.length > 2 && (
                <span className="ingredient-tag bg-gray-100 text-gray-700">
                  +{recipe.tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;