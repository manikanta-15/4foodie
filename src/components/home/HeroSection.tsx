import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="relative bg-cover bg-center h-[80vh] min-h-[600px]" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), 
                        url('https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg')`
    }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            Discover Delicious <span className="text-primary-400">Indian Recipes</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fadeIn animation-delay-200">
            Find the perfect recipe based on ingredients you already have at home.
            From classic curries to street food favorites.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10 relative animate-fadeIn animation-delay-400">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a recipe or ingredient..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-4 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 text-gray-900 p-3 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-4 animate-fadeIn animation-delay-600">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              #ButterChicken
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              #BiryaniRecipes
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              #PaneerDishes
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              #VegetarianCurry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;