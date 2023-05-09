'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({ strapi }) => ({
    async create(ctx) {
        const { products, userName, email } = ctx.request.body;

        try {
            const lineItems = await Promise.all(
                products.map(async (products) => {
                    const item = await strapi.service("api::item.item").findOne(product:id);
                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.name
                            },
                            unit_amount: item.price * 100, 
                        },
                        quantity: product.count,
                    }
                })
            );
        } catch {
            //TODO HERE

        }
    }
}));


