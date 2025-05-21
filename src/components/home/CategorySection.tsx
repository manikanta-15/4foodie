import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCard {
  title: string;
  image: string;
  link: string;
}

const categories: CategoryCard[] = [
  {
    title: 'North Indian',
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
    link: '/search?region=north'
  },
  {
    title: 'South Indian',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    link: '/search?region=south'
  },
  {
    title: 'Street Food',
    image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg',
    link: '/search?category=street-food'
  },
  {
    title: 'Vegetarian',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    link: '/search?category=vegetarian'
  },
  {
    title: 'Non-Vegetarian',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    link: '/search?category=non-vegetarian'
  },
  {
    title: 'Desserts',
    image: 'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg',
    link: '/search?category=desserts'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Explore by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a world of flavors with our diverse range of authentic Indian recipes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-lg transition duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;