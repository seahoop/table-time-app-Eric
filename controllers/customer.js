
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
}

export const cancelReservation = async (req, res) => {
    const reserveId = req.params.reservationId
    const cancelReservation = await Reservation.findByIdAndUpdate(reserveId, { isAvailable: true })
    const custId = req.params.customerId
    const cust = await Customer.findById(custId)
    const newReservations = cust.myReservations.filter((reservation) => {
        return reserveId !== reservation._id.toString()
    })
    cust.myReservations = newReservations
    await cust.save()
    res.status(200).json(cust)
}

export const makeReservation = async (req, res) => {
    const custId = req.params.customerId //found customerId from url
    const customer = await Customer.findById(custId) // founnd customer using customer Id
    const newRes = await Reservation.create(req.body)
    customer.myReservations.push(newRes._id) // push resId to the customer (used push method because myReservation is an array)
    await customer.save()
    await customer.populate('myReservations'),
        await customer.populate('favorites'),
        await customer.populate('pastReservations')
    res.status(200).json(customer)
}

export const favRestaurant = async (req, res) => {
    const { customerId, restaurantId } = req.params
    const customer = await Customer.findById(customerId)
    let alreadyFavorite = customer.favorites.some((restaurant) => restaurant._id.toString() === restaurantId)
    if (!alreadyFavorite) {
        customer.favorites.push(restaurantId)
        await customer.save()
        await customer.populate('favorites')
        res.status(200).json(customer)
    } else {
        await customer.populate('favorites')
        res.status(200).json({ customer, alreadyFavorite: true })
    }
}
