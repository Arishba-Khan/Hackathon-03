import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]{
        id,
        productName,
        price,
        stockStatus,
        "image": image.asset->url
    }
    `;
    export const prodetail = (id: string) => groq`*[_type == "product" && id == "${id}"][0]{
        id,
        productName,
        category,
        price,
        inventory,
        colors,
        stockStatus,
        "image": image.asset->url,
        description,
        size
      }`;

      export const air = groq`*[_type == "product" && productName match "*air*"] {
        id,
        productName,
        price,
        stockStatus,
        "image": image.asset->url,
      }
      `;      

      export const gearUpQuery = groq`*[_type == "product" && (category == "Men's Shoes" || category == "Women's Shoes")] {
        id,
        productName,
        description,
        price,
        category,
        "image": image.asset->url
      }
      `;