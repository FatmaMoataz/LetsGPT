import Transaction from "../models/Transaction.js"
import Stripe from "stripe"

const plans = [
      {
    _id: "basic",
    name: "Basic",
    price: 5,
    credits: 100,
    features: [
      "100 AI credits",
      "Standard response speed",
      "Access to basic models",
      "Community image access",
    ],
  },
  {
    _id: "pro",
    name: "Pro",
    price: 15,
    credits: 500,
    features: [
      "500 AI credits",
      "Faster response speed",
      "Access to advanced models",
      "Priority generation queue",
      "Community image publishing",
    ],
  },
  {
    _id: "enterprise",
    name: "Enterprise",
    price: 49,
    credits: 5000,
    features: [
      "5000 AI credits",
      "Ultra-fast responses",
      "Unlimited conversations",
      "Advanced image generation",
      "Dedicated support",
    ],
  },
]

// API to get all plans
export const getPlans = async(req , res) => {
try {

    res.json({status:true , plans})
} catch (error) {
    res.json({status:false , message:error.message})
}
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// API to purchase a plan
export const purchasePlan = async(req , res) => {
    try {
        const {planId} = req.body
        const userId = req.user._id
        const plan = plans.find(plan => plan._id === planId)
        if(!plan) {
            return res.json({status:false , message:"Invalid plan"})
        }
        const transaction = await Transaction.create({
            userId,
            planId: plan._id,
            amount: plan.price,
            credits: plan.credits,
            isPaid: false,
        })

        const {origin} = req.headers
        const session = await stripe.checkout.sessions.create({
            line_items:[
{
    price_data:{
        currency:"usd",
        unit_amount: plan.price * 100,
        product_data:{
            name: plan.name,
        }
    },
    quantity:1,
}
            ],
            mode:"payment",
            success_url: `${origin}/loading`,
            cancel_url: `${origin}`,
            metadata: {transactionId: transaction._id.toString() , appId:'letsgpt'},
            expires_at: Math.floor(Date.now() / 1000) + (30 * 60), // Session expires in 30 minutes
        })
        res.json({status:true , url: session.url})

    } catch (error) {
        res.json({status:false , message:error.message})
    }
}