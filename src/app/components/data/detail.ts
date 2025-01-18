import { StaticImageData } from "next/image";
import best1 from "../../../../public/Best/best1.png";
import best2 from "../../../../public/Best/best2.png";
import best3 from "../../../../public/Best/best3.png";
import G1 from "../../../../public/assests/G1.png";
import G2 from "../../../../public/assests/G2.png";
import G3 from "../../../../public/assests/G3.png";
import G4 from "../../../../public/assests/G4.png";

export interface ProductDetail {
  id: string | number;
  name: string;
  description: string;
  price: string | number; 
  imageUrl: string | StaticImageData; 
  category?: "men" | "women"; 
}

export const products: ProductDetail[] = [
  
  {
    id: 1,
    name: "Nike Air Max Pulse",
    description: "Women's Shoe",
    price: "$13.99",
    imageUrl: best1,
    category: "women",
  },
  {
    id: 2,
    name: "Nike Air Max Pulse",
    description: "Men's Shoe",
    price: "$13.99",
    imageUrl: best2,
    category: "men",
  },
  {
    id: 3,
    name: "Nike Air 97 SE",
    description: "Men's Shoe",
    price: "$16.95",
    imageUrl: best3,
    category: "men",
  },

  {
    id: 4,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short Sleeve",
    price: "₹3895",
    imageUrl: G1,
    category: "men",
  },
  {
    id: 5,
    name: "Nike Dri-FIT ADV Challenger",
    description: "Men's 18cm (approx.)",
    price: "₹2495",
    imageUrl: G2,
    category: "men",
  },
  {
    id: 6,
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Long Sleeve",
    price: "₹5295",
    imageUrl: G3,
    category: "women",
  },
  {
    id: 7,
    name: "Nike Fast",
    description: "Women's Mid-Rise 7/8 Running",
    price: "₹3795",
    imageUrl: G4,
    category: "women",
  },
];
