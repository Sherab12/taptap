// import { mongooseConnect } from "@/lib/mongoose";
// const stripe = require('stripe')('process.env.STRIPE_SK');
// import { buffer } from "micro/types/src/lib";

// const endpointSecret = "whsec_1b9fc7b7cc10c3625ebf4ad09a99e8a0618a7bf48ec7971b559d037d6a72cce3";

// export default async function handler(req,res){
//     await mongooseConnect();
//     const sig = req.headers['stripe-signature'];

//     let event;

//     try {
//         event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
//     } catch (err) {
//         res.status(400).send(`Webhook Error: ${err.message}`);
//         return;
//     }

//     // Handle the event
//     switch (event.type) {
//         case 'payment_intent.succeeded':
//         const paymentIntentSucceeded = event.data.object;
//         console.log(paymentIntentSucceeded);
//         break;
//         // ... handle other event types
//         default:
//         console.log(`Unhandled event type ${event.type}`);
//     }
// }

// export const config = {
//     api:{bodyParser:false,}
// };