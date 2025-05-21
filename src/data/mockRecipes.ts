import { Recipe } from '../types/Recipe';

export const mockFeaturedRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Creamy, spiced chicken curry that\'s so tender and flavorful. With a smooth, silky sauce that\'s unforgettable.',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    cookTime: 40,
    prepTime: 20,
    totalTime: 60,
    serves: 4,
    difficulty: 'Medium',
    isVegetarian: false,
    category: 'dinner',
    region: 'North',
    rating: 4.8,
    ingredients: [
      { name: 'boneless chicken', quantity: '500', unit: 'g' },
      { name: 'yogurt', quantity: '1/2', unit: 'cup' },
      { name: 'ginger-garlic paste', quantity: '2', unit: 'tbsp' },
      { name: 'garam masala', quantity: '1', unit: 'tbsp' },
      { name: 'butter', quantity: '3', unit: 'tbsp' },
      { name: 'tomato puree', quantity: '1', unit: 'cup' },
      { name: 'heavy cream', quantity: '1/4', unit: 'cup' },
      { name: 'kasuri methi (dried fenugreek leaves)', quantity: '1', unit: 'tsp' },
      { name: 'salt', quantity: '', unit: 'to taste' },
    ],
    instructions: [
      'Marinate chicken with yogurt, ginger-garlic paste, and salt for at least 30 minutes.',
      'In a pan, heat butter and cook the marinated chicken until it\'s no longer pink.',
      'Add tomato puree and garam masala. Cook for 10 minutes on medium heat.',
      'Pour in the heavy cream and simmer for another 5 minutes.',
      'Crush the kasuri methi between your palms and add to the curry.',
      'Adjust salt to taste and serve hot with naan or rice.'
    ],
    notes: [
      'For a richer taste, you can add a tablespoon of butter just before serving.',
      'Marinating the chicken overnight will give even better flavor.'
    ],
    tags: ['Chicken', 'Curry', 'North Indian', 'Creamy']
  },
  {
    id: '2',
    name: 'Masala Dosa',
    description: 'Crispy fermented crepe filled with spiced potato filling. A South Indian breakfast classic.',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    cookTime: 30,
    prepTime: 120,
    totalTime: 150,
    serves: 4,
    difficulty: 'Hard',
    isVegetarian: true,
    category: 'breakfast',
    region: 'South',
    rating: 4.7,
    ingredients: [
      { name: 'rice', quantity: '2', unit: 'cups' },
      { name: 'urad dal', quantity: '1/2', unit: 'cup' },
      { name: 'potatoes', quantity: '4', unit: 'medium', notes: 'boiled and mashed' },
      { name: 'onion', quantity: '1', unit: 'large', notes: 'finely chopped' },
      { name: 'green chilies', quantity: '2', unit: '', notes: 'finely chopped' },
      { name: 'mustard seeds', quantity: '1', unit: 'tsp' },
      { name: 'turmeric powder', quantity: '1/2', unit: 'tsp' },
      { name: 'curry leaves', quantity: 'few', unit: '' },
      { name: 'oil', quantity: '', unit: 'as needed' },
    ],
    instructions: [
      'Soak rice and urad dal separately for 4-6 hours, then grind to a smooth batter.',
      'Allow the batter to ferment overnight or for at least 8 hours.',
      'For potato filling, heat oil in a pan and add mustard seeds. When they splutter, add curry leaves and green chilies.',
      'Add chopped onions and sauté until golden brown.',
      'Add turmeric powder and mashed potatoes. Mix well and cook for 5 minutes.',
      'To make dosa, heat a non-stick pan, pour a ladleful of batter, and spread it thin.',
      'Drizzle oil around the edges and cook until golden brown.',
      'Place some potato filling in the center, fold, and serve hot with coconut chutney and sambar.'
    ],
    notes: [
      'Make sure the pan is hot before pouring the batter for a crispy dosa.',
      'Serving with coconut chutney and sambar enhances the authentic experience.'
    ],
    tags: ['Vegetarian', 'Breakfast', 'South Indian', 'Crispy']
  },
  {
    id: '9',
    name: 'Kulfi Ice Cream',
    description: 'Traditional Indian ice cream made with condensed milk, nuts, and cardamom. Dense, creamy, and absolutely delicious.',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
    cookTime: 20,
    prepTime: 10,
    totalTime: 360, // Including freezing time
    serves: 6,
    difficulty: 'Easy',
    isVegetarian: true,
    category: 'desserts',
    region: 'North',
    rating: 4.9,
    ingredients: [
      { name: 'full-fat milk', quantity: '1', unit: 'liter' },
      { name: 'condensed milk', quantity: '400', unit: 'ml' },
      { name: 'cardamom powder', quantity: '1', unit: 'tsp' },
      { name: 'pistachios', quantity: '1/4', unit: 'cup', notes: 'chopped' },
      { name: 'almonds', quantity: '1/4', unit: 'cup', notes: 'chopped' },
      { name: 'saffron strands', quantity: 'few', unit: '' },
    ],
    instructions: [
      'In a heavy-bottomed pan, bring milk to a boil, then reduce heat.',
      'Simmer and stir continuously until milk reduces to half its volume.',
      'Add condensed milk and continue cooking for 10 minutes.',
      'Add cardamom powder, chopped nuts, and saffron strands.',
      'Let the mixture cool to room temperature.',
      'Pour into kulfi molds or small containers.',
      'Freeze for at least 6 hours or overnight.',
      'To serve, dip molds briefly in warm water and unmold onto plates.'
    ],
    notes: [
      'For a creamier texture, blend the mixture before freezing.',
      'Can be stored in the freezer for up to 2 weeks.'
    ],
    tags: ['Dessert', 'Ice Cream', 'Traditional', 'Summer']
  },
  {
    id: '10',
    name: 'Mango Ice Cream',
    description: 'Creamy homemade ice cream bursting with fresh mango flavor. Perfect summer dessert.',
    image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
    cookTime: 15,
    prepTime: 15,
    totalTime: 360, // Including freezing time
    serves: 8,
    difficulty: 'Easy',
    isVegetarian: true,
    category: 'desserts',
    region: 'All India',
    rating: 4.8,
    ingredients: [
      { name: 'ripe mangoes', quantity: '3', unit: 'large', notes: 'pulped' },
      { name: 'heavy cream', quantity: '2', unit: 'cups' },
      { name: 'condensed milk', quantity: '1', unit: 'can' },
      { name: 'cardamom powder', quantity: '1/2', unit: 'tsp' },
      { name: 'saffron strands', quantity: 'few', unit: '', notes: 'optional' },
    ],
    instructions: [
      'Peel and pulp the mangoes until smooth.',
      'Whip the heavy cream until stiff peaks form.',
      'In a separate bowl, mix mango pulp with condensed milk.',
      'Add cardamom powder and saffron strands to the mango mixture.',
      'Gently fold the whipped cream into the mango mixture.',
      'Pour into a freezer-safe container.',
      'Freeze for at least 6 hours or overnight.',
      'Let sit at room temperature for 5 minutes before serving.'
    ],
    notes: [
      'Use the sweetest, ripest mangoes for best flavor.',
      'Can be stored in the freezer for up to 2 weeks.'
    ],
    tags: ['Dessert', 'Ice Cream', 'Mango', 'Summer']
  }
];

export const mockPopularRecipes: Recipe[] = [
  {
    id: '11',
    name: 'Gulab Jamun Ice Cream',
    description: 'A fusion dessert combining classic gulab jamun with creamy ice cream. Best of both worlds!',
    image: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg',
    cookTime: 30,
    prepTime: 20,
    totalTime: 360, // Including freezing time
    serves: 8,
    difficulty: 'Medium',
    isVegetarian: true,
    category: 'desserts',
    region: 'Fusion',
    rating: 4.9,
    ingredients: [
      { name: 'gulab jamun', quantity: '8-10', unit: 'pieces', notes: 'store-bought or homemade' },
      { name: 'heavy cream', quantity: '2', unit: 'cups' },
      { name: 'condensed milk', quantity: '1', unit: 'can' },
      { name: 'cardamom powder', quantity: '1/2', unit: 'tsp' },
      { name: 'pistachios', quantity: '2', unit: 'tbsp', notes: 'chopped' },
      { name: 'rose syrup', quantity: '2', unit: 'tbsp', notes: 'optional' },
    ],
    instructions: [
      'Chop gulab jamuns into small pieces.',
      'Whip heavy cream until stiff peaks form.',
      'Mix condensed milk with cardamom powder and rose syrup.',
      'Fold whipped cream into the condensed milk mixture.',
      'Add chopped gulab jamuns and mix gently.',
      'Pour into a freezer-safe container.',
      'Top with chopped pistachios.',
      'Freeze for at least 6 hours or overnight.'
    ],
    notes: [
      'Drain excess sugar syrup from gulab jamuns before adding.',
      'Can be stored in the freezer for up to 2 weeks.'
    ],
    tags: ['Dessert', 'Ice Cream', 'Fusion', 'Gulab Jamun']
  },
  {
    id: '12',
    name: 'Paan Ice Cream',
    description: 'Unique ice cream flavor inspired by the traditional Indian mouth freshener. Refreshing and exotic!',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
    cookTime: 20,
    prepTime: 15,
    totalTime: 360, // Including freezing time
    serves: 6,
    difficulty: 'Medium',
    isVegetarian: true,
    category: 'desserts',
    region: 'North',
    rating: 4.7,
    ingredients: [
      { name: 'heavy cream', quantity: '2', unit: 'cups' },
      { name: 'condensed milk', quantity: '1', unit: 'can' },
      { name: 'paan leaves', quantity: '4-5', unit: 'leaves', notes: 'finely chopped' },
      { name: 'gulkand (rose petal preserve)', quantity: '3', unit: 'tbsp' },
      { name: 'fennel seeds', quantity: '1', unit: 'tsp', notes: 'crushed' },
      { name: 'cardamom powder', quantity: '1/2', unit: 'tsp' },
      { name: 'mixed nuts', quantity: '1/4', unit: 'cup', notes: 'chopped' },
    ],
    instructions: [
      'Whip heavy cream until stiff peaks form.',
      'Mix condensed milk with gulkand and cardamom powder.',
      'Add finely chopped paan leaves and crushed fennel seeds.',
      'Fold whipped cream into the mixture.',
      'Add most of the chopped nuts, saving some for garnish.',
      'Pour into a freezer-safe container.',
      'Top with remaining nuts.',
      'Freeze for at least 6 hours or overnight.'
    ],
    notes: [
      'Use fresh, tender paan leaves for best results.',
      'Adjust gulkand quantity based on desired sweetness.'
    ],
    tags: ['Dessert', 'Ice Cream', 'Unique', 'Paan']
  },
  {
    id: '13',
    name: 'Gajar Ka Halwa',
    description: 'Traditional Indian carrot pudding made with fresh carrots, milk, and nuts. A winter favorite!',
    image: 'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg',
    cookTime: 45,
    prepTime: 15,
    totalTime: 60,
    serves: 6,
    difficulty: 'Medium',
    isVegetarian: true,
    category: 'desserts',
    region: 'North',
    rating: 4.8,
    ingredients: [
      { name: 'carrots', quantity: '1', unit: 'kg', notes: 'grated' },
      { name: 'full-fat milk', quantity: '1', unit: 'liter' },
      { name: 'sugar', quantity: '1', unit: 'cup' },
      { name: 'ghee', quantity: '1/2', unit: 'cup' },
      { name: 'cardamom powder', quantity: '1', unit: 'tsp' },
      { name: 'mixed nuts', quantity: '1/2', unit: 'cup', notes: 'chopped' },
      { name: 'raisins', quantity: '2', unit: 'tbsp' },
    ],
    instructions: [
      'Heat ghee in a heavy-bottomed pan and add grated carrots.',
      'Cook carrots for 5-7 minutes until they start to soften.',
      'Add milk and bring to a boil, then reduce heat.',
      'Simmer and stir occasionally until milk reduces completely.',
      'Add sugar and continue cooking until mixture thickens.',
      'Add cardamom powder, nuts, and raisins.',
      'Cook for another 5 minutes until halwa leaves sides of pan.',
      'Serve hot, garnished with extra nuts.'
    ],
    notes: [
      'Use red carrots for traditional taste and color.',
      'Can be stored in refrigerator for up to a week.'
    ],
    tags: ['Dessert', 'Winter', 'Traditional', 'Halwa']
  }
];

// Combining all recipes for the search functionality
export const mockAllRecipes: Recipe[] = [...mockFeaturedRecipes, ...mockPopularRecipes];