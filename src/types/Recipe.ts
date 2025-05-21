export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
  notes?: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  cookTime: number;
  prepTime: number;
  totalTime: number;
  serves: number;
  difficulty: string;
  isVegetarian: boolean;
  category: string;
  region: string;
  rating: number;
  ingredients: Ingredient[];
  instructions: string[];
  notes?: string[];
  tags: string[];
}