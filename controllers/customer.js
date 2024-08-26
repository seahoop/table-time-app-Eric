import express from "express"
import Customer from "../models/customer.js"
const router = express.Router()

router.get("/:customerId", async (req, res) => {
    const user = await Customer.findById('66ccb537f781402a666e0a32')
    res.send(` this is the customer ${user}`)
})

router.get("/:customerId/restaurant/:restaurantId", async (req, res) => {
    res.send("this is a restaurant page")
})

router.get("/:customerId/favorites", async (req, res) => {
    res.send("This is a favorites page")
})

router.put("/:customerId/restaurant/:restaurantId/reservation/:reservationId/edit", async (req, res) => {
    res.send("This is a customer reservation edit page")
})

router.put("/:customerId/restaurant/:restaurantId/reservation/:reservationId/edit", async (req, res) => {
    res.send("This is a customer reservation delete route")
})

router.post("/:customerId/restaurant/:restaurantId/favorites", async (req, res) => {
    res.send("This page will add a restaurant to myFavorites")
})




export default router


