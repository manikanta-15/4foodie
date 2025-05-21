import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Heart, Printer, Share2, Star } from 'lucide-react';
import { Recipe } from '../types/Recipe';
import { mockAllRecipes } from '../data/mockRecipes';

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('ingredients');
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call to fetch the recipe by ID
    const fetchedRecipe = mockAllRecipes.find(r => r.id === id);
    setRecipe(fetchedRecipe || null);
    setLoading(false);
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    // In a real app, this would make an API call to save/remove the recipe from favorites
  };

  if (loading) {
    return (
      <div className="py-16 text-center">
        <p>Loading recipe...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="py-16 container-custom text-center">
        <h2 className="text-2xl font-semibold mb-4">Recipe Not Found</h2>
        <p className="text-gray-600 mb-8">The recipe you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-16">
      {/* Hero Image */}
      <div 
        className="w-full h-[40vh] md:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${recipe.image})` }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="container-custom pb-8">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
              recipe.isVegetarian ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}>
              {recipe.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">{recipe.name}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{recipe.cookTime} mins</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Serves {recipe.serves}</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 mr-2" />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < recipe.rating ? 'text-primary-400 fill-primary-400' : 'text-gray-400'}`} />
                  ))}
                </div>
                <span className="ml-2">{recipe.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            {/* Recipe Actions */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <button 
                  onClick={toggleFavorite}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border ${
                    isFavorited 
                      ? 'bg-secondary-100 border-secondary-300 text-secondary-700' 
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isFavorited ? 'fill-secondary-500 text-secondary-500' : ''}`} />
                  <span className="text-sm font-medium">{isFavorited ? 'Saved' : 'Save'}</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Printer className="h-4 w-4" />
                  <span className="text-sm font-medium">Print</span>
                </button>
              </div>
            </div>

            {/* Recipe Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About This Recipe</h2>
              <p className="text-gray-700 leading-relaxed">{recipe.description}</p>
            </div>

            {/* Recipe Content Tabs */}
            <div className="mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`py-4 text-sm font-medium border-b-2 ${
                      activeTab === 'ingredients'
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Ingredients
                  </button>
                  <button
                    onClick={() => setActiveTab('instructions')}
                    className={`py-4 text-sm font-medium border-b-2 ${
                      activeTab === 'instructions'
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Instructions
                  </button>
                  <button
                    onClick={() => setActiveTab('notes')}
                    className={`py-4 text-sm font-medium border-b-2 ${
                      activeTab === 'notes'
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Tips & Notes
                  </button>
                </nav>
              </div>

              <div className="py-6">
                {activeTab === 'ingredients' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ingredients for {recipe.serves} servings</h3>
                    <ul className="space-y-3">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 text-sm mr-3 mt-0.5">
                            {index + 1}
                          </div>
                          <div>
                            <span className="font-medium">{ingredient.quantity} {ingredient.unit}</span> {ingredient.name}
                            {ingredient.notes && <span className="text-gray-500 text-sm"> ({ingredient.notes})</span>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'instructions' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Step by Step Instructions</h3>
                    <ol className="space-y-6">
                      {recipe.instructions.map((step, index) => (
                        <li key={index} className="flex">
                          <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm mr-4 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-gray-700">{step}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {activeTab === 'notes' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tips & Notes</h3>
                    {recipe.notes && recipe.notes.length > 0 ? (
                      <ul className="space-y-4">
                        {recipe.notes.map((note, index) => (
                          <li key={index} className="flex items-start">
                            <div className="text-primary-500 mr-2">•</div>
                            <p className="text-gray-700">{note}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">No additional notes for this recipe.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3">
            {/* Recipe Categories */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-lg font-semibold mb-4">Recipe Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Category</p>
                  <p className="font-medium capitalize">{recipe.category.replace('-', ' ')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Cuisine</p>
                  <p className="font-medium">{recipe.region} Indian</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tags</p>
                  <div className="flex flex-wrap mt-1">
                    {recipe.tags.map((tag, index) => (
                      <Link 
                        key={index}
                        to={`/search?q=${tag}`}
                        className="ingredient-tag bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Recipes */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4">You May Also Like</h3>
              
              <div className="space-y-4">
                {mockAllRecipes
                  .filter(r => 
                    r.id !== recipe.id && 
                    (r.category === recipe.category || r.region === recipe.region)
                  )
                  .slice(0, 3)
                  .map(similarRecipe => (
                    <Link 
                      key={similarRecipe.id}
                      to={`/recipe/${similarRecipe.id}`}
                      className="flex items-center space-x-3 group"
                    >
                      <img 
                        src={similarRecipe.image} 
                        alt={similarRecipe.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                          {similarRecipe.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {similarRecipe.cookTime} mins • {similarRecipe.difficulty}
                        </p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;