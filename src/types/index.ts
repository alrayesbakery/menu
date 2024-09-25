export interface MenuItem {
  id: number;
  name: string;
  image: string;
  price?: string;
  prices?: { small: string; large: string };
  ingredients: string;
  category: string;
}
