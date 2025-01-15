import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParam: string) => {
    const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[
            _type == "product"
            && name match $searchParam
        ] | order(name asc)
        `);

        try {
            const products = await sanityFetch({
            query: PRODUCT_SEARCH_QUERY,
            params: {
                 searchParam: `${searchParam}*`, // Apprend wild card for partial match
                    },
                    });
                    // return the list of products, or an empty array if non is found
                    return products.data || [];
        } catch (error) {
            console.error("Error Fetching Product By Name",error);
            return [];
        }
};