import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsByCategory = async (categorySlug: string) => {
    const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
        *[
            _type == "product" 
            && references(*[_type == "category" && slug.current == $categorySlug]._id)
       ] | order(name asc)
        `);

        try {
            // the sanityFetch is sent to query and pass the category slug
            const products = await sanityFetch({ 
            query: PRODUCTS_BY_CATEGORY_QUERY,
            params: { 
                categorySlug,
                },
             });

             // return the list of products , or an empty array
             return products.data || [];
             } catch (error) {
                console.error("Error fetching products by category", error);
                return [];
        }
}