
import Customer from "../models/customer.js"
import Restaurant from "../models/restaurant.js"
import Reservation from "../models/reservation.js"


export const showDashboard = async (req, res) => {
    const id = req.params.customerId
    const customer = await Customer.findById(id).populate('favorites').populate('myReservations').populate('pastReservations')
    const restaurants = await Restaurant.find({})
    res.status(200).json({ customer, restaurants })
}
      
export const showRestaurant = async (req, res) => {
    const resId = req.params.restaurantId
    const restaurant = await Restaurant.findById(resId)
    res.status(200).json(restaurant)
    res.send(`this is a restaurant page ${restaurant}`) 
}

export const editReservation = async (req, res) => {
    const resId = req.params.reservationId
    const newGuests = req.body.guests
    const newTime = req.body.time
    const newDate = req.body.date
    const editRes = await Reservation.findByIdAndUpdate(resId, { guests: newGuests, time: newTime, date: new Date(newDate) })
    const custId = req.params.customerId
    const customer = await Customer.findById(custId).populate('myReservations').populate('pastReservations').populate('favorites')

    res.status(200).json(customer)
    res.send(`Here is your new Reservation details ${editRes} `)
}

export const cancelReservation = async (req, res) => {
    const reserveId = req.params.reservationId
    const cancelReservation = await Reservation.findByIdAndUpdate(reserveId, { isAvailable: true }
    )
    const custId = req.params.customerId
    const cust = await Customer.findById(custId)
    const newReservations = cust.myReservations.filter((reservation) => {
        return reserveId !== reservation._id.toString()
    })
    cust.myReservations = newReservations
    await cust.save()
    res.status(200).json(cust)
    res.send(`This is your updated reservation ${cancelReservation}`)
}
export const makeReservation = async (req, res) => {
    const custId = req.params.customerId //found customerId from url

    const resId = req.params.reservationId // found reservation from url

    const customer = await Customer.findById(custId) // founnd customer using customer Id

    const newRes = await Reservation.findByIdAndUpdate(resId, {
        isAvailable: false
    }) // found reservation by Id and updates isAvailable to false

    customer.myReservations.push(resId) // push resId to the customer (used push method because myReservation is an array)

    await customer.save()
    await customer.populate('myReservations'),await customer.populate('favorites'),
    await customer.populate('pastReservations')
    res.status(200).json(customer)
    res.send(`These are your new reservations ${customer}`)
    /* ------------------------------------Issue: Adding reservation twice to my reservations --------------------------------------*/
}
export const favRestaurant = async (req, res) => {
    const custId = req.params.customerId
    const restId = req.params.restaurantId
    const customer = await Customer.findById(custId)
    customer.favorites.push(restId)
    await customer.save()
    await customer.populate('favorites')
    res.status(200).json(customer)
    res.send(`This is your favorite Restaurants ${restId}`)
}
 

/*-----------------------------------------Issue: make adding a reservation once per restaurantId------------------------------------------*/


 
