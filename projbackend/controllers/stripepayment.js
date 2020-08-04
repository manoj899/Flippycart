const stripe = require("stripe")("sk_test_51H3NkTFe3Zz1GJSkZtzjK2GVzULH7MOZPFNq5UQ6rR3VAINlIt0U2ygzPPFzy1UBV1SxAL0CeNackzLYOeVDFUgN00zkgbM6vG")
const uuid = require("uuid/v4");
const product = require("../models/product");

exports.makepayment = ( req, res) => {
    const {products, token} = req.body
    console.log("PRODUCTS", products)

    let amount = 0;
    product.map( p => {
        amount = amount + p.price;
    })

    const ideopotencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: amount,
            currency: "usd",
            customer: customer._id,
            receipt_email: token.email,
            shipping: {
                name: token.card.name
            }
        }, {idempotencyKey})
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
    })
};