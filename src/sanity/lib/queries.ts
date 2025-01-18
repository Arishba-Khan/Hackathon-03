import {defineQuery} from 'next-sanity';

export const allProducts = defineQuery(`
    *[_type == "product"]{
        _id,
        name,
        description,
        price,
        inventory,
        colors,
        status,
        "image": image.asset->url
    }
    `);

// for four products
    export const fourPro = defineQuery(`
        *[_type == "product"][0..3]{
            _id,
            name,
            description,
            price,
            inventory,
            colors,
            status,
            "image": image.asset->url
        }
        `);
