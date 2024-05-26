export interface IStarbucksItem {
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string[];
  grind_option: string[];
  roast_level: number;
  image_url: string;
  stock: number;
}

export interface IProductItem {
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string;
  grind_option: string;
  roast_level: number;
  image_url: string;
  stock: number;
}

