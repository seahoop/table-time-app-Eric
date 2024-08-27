import express from "express"
import Customer from "../models/customer.js"
import Restaurant from "../models/restaurant.js"
import Reservation from "../models/reservation.js"
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

router.put("/:customerId/restaurants/:restaurantId/reservations/:reservationId/edit", async (req, res) => {
    const resId = req.params.reservationId
    const editRes = await Reservation.findByIdAndUpdate(resId, {guests: 22, time: "21:00", date: new Date("2024-12-24")})
    res.send(`Here is your new Reservation details ${editRes} `)
}) 

router.delete("/:customerId/restaurants/:restaurantId/reservations/:reservationId", async (req, res) => {
    const reserveId = req.params.reservationId
    const cancelReservation = await Reservation.findByIdAndUpdate(reserveId, { isAvailable: true }
    )
    const custId = req.params.customerId
    const cust = await Customer.findById(custId)
    const newReservations = cust.myReservations.filter((reservation) => {
        reserveId !== reservation._id
    })
    cust.myReservations = newReservations
    cust.save()
    res.send(`This is your updated reservation ${cancelReservation}`)
})

router.post("/:customerId/restaurant/:restaurantId/favorites", async (req, res) => {
    res.send("This page will add a restaurant to myFavorites")
})

router.put("/:customerId/restaurants/restaurantId/reservations/:reservationId", async (req, res) => {
    const custId = req.params.customerId //found customerId from url

    const resId = req.params.reservationId // found reservation from url

    const customer = await Customer.findById(custId) // founnd customer using customer Id

    const newRes = await Reservation.findByIdAndUpdate(resId, {
        isAvailable: false
    }) // found reservation by Id and updates isAvailable to false

    customer.myReservations.push(resId) // push resId to the customer (used push method because myReservation is an array)

    await customer.save()
    res.send(`These are your new reservations ${ customer}`) 
    /* ------------------------------------Issue: Adding reservation twice to my reservations --------------------------------------*/
})

router.put("/:customerId/restaurants/:restaurantId/favorites", async (req, res) => {
    const custId = req.params.customerId
    const restId = req.params.restaurantId
    const customer = await Customer.findById(custId)
    customer.favorites.push(restId)
    await customer.save()
    res.send(`This is your favorite Restaurants ${restId}`)
})

 
/*-----------------------------------------Issue: make adding a reservation once per restaurantId------------------------------------------*/


export default router


