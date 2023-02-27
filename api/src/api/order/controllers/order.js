"use strict";

const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    // get product from req.body
    const { products } = ctx.request.body;

    // fetch products from strapi db
    const lineItems = await Promise.all(
      products.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);

        // get the item quantity from products since quantity is not saved in strapi db
        const itemProduct = products.filter(
          (singleProduct) => singleProduct.id === item.id
        )[0];

        // return lineItem object for stipe line_items array
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
              images: [itemProduct.image],
            },
            unit_amount: item.price * 100,
          },
          quantity: itemProduct.quantity,
          adjustable_quantity: { enabled: true, minimum: 1, maximum: 9 },
        };
      })
    );

    // create session for products fetched from strapi db
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      submit_type: "pay",
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      payment_method_types: ["card"],
      success_url: `${process.env.CLIENT_URL}?success=true`,
      cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
    });
    try {
      // write order to strapi db
      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      // return stripe sessionId
      return { stripeSession: session };
    } catch (err) {
      ctx.response.status = 500;
      return err;
    }
  },
}));
