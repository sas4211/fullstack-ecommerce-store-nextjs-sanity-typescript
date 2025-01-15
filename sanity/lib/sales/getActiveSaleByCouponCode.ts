
import { sanityFetch } from "../live";
import { CouponCode } from "./couponCodes";
import { defineQuery } from "next-sanity";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
    
    const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
        *[
              _type == "sale"
              && isActive == true
              && couponCode == $couponCode
              ] | order(validFrom desc) {
                _id,
                title,
                description,
                discountAmount,   
                couponCode,
                validFrom,
                validTil,
                isActive
              }[0]
             `);

             try {
                const activeSale = await sanityFetch({
                    query: ACTIVE_SALE_BY_COUPON_QUERY, 
                    params:{
                     couponCode ,
                    }, // pass the couponCode as a query parameter
             });

             return activeSale ? activeSale.data : null;} catch (error) {
                console.error("Error fetching active sale by coupon code",error);
                return null;
             }
};
