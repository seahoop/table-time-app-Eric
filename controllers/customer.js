import express from "express"
import Customer from "../models/customer.js"
import Restaurant from "../models/restaurant.js"
const router = express.Router()

router.get("/:customerId", async (req, res) => {
    const id = req.params.customerId 
    const customer = await Customer.findById(id)
    res.send(` this is the customer ${customer}`)
})

router.get("/:customerId/restaurant/:restaurantId", async (req, res) => {
    const resId = req.params.restaurantId
    const restaurant = await Restaurant.findById(resId)
    res.send(`this is a restaurant page ${restaurant}`)
})

router.get("/:customerId/favorites", async (req, res) => {
    res.send("This is a favorites page")
})

router.put("/:customerId/restaurant/:restaurantId/reservation/:reservationId/edit", async (req, res) => {
    res.send("This is a customer reservation edit page")
})

router.put("/:customerId/restaurant/:restaurantId/reservation/:reservationId/edit", async (req, res) => {
const reserveId = req.params.reservationId
 await Reservation.findByIdAndUpdate(reserveId, { available: true})
const custId = req.params.customerId
const cust = await Customer.findById(custId)
const newReservations = cust.myReservations.filter((reservation) => {
    reserveId !== reservation._id 
})
cust.myReservations = newReservations
cust.save()
    res.send("This is a customer reservation delete route")
})

router.post("/:customerId/restaurant/:restaurantId/favorites", async (req, res) => {
    res.send("This page will add a restaurant to myFavorites")
})




export default router


