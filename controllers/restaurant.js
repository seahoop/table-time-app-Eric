import Restaurant from "../models/restaurant.js"
import Reservation from "../models/reservation.js"

export const showRestaurantDashboard = async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.restaurantId).populate('reservations')
    res.status(200).json({ restaurant })
}

export const editRestaurantDashboard = async (req, res) => {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.restaurantId, req.body).populate('reservations')
    res.status(200).json(restaurant)
}

export const newReservation = async (req, res) => {
    const restaurantId = req.params.restaurantId
    const { location, guests, date, time } = req.body
    const restaurant = await Restaurant.findById(restaurantId)
    const newReservation = await Reservation.create(
        {
            location: location,
            time: time,
            guests: Number(guests),
            date: new Date(date)
        }
    )
    restaurant.reservations.push(newReservation._id)
    await restaurant.save()
    await restaurant.populate('reservations')
    res.status(200).json(restaurant)
}

export const editReservation = async (req, res) => {
    const reservationId = req.params.reservationId
    const { location, guests, date, time } = req.body
    const restaurantId = req.params.restaurantId
    await Reservation.findByIdAndUpdate(reservationId,
        {
            location: location,
            time: time,
            guests: Number(guests),
            date: new Date(date)
        }
    )
    const restaurant = await Restaurant.findById(restaurantId).populate('reservations')
    res.status(200).json(restaurant)
}

export const deleteReservation = async (req, res) => {
    const { reservationId, restaurantId } = req.params
    const restaurant = await Restaurant.findById(restaurantId)
    const newReservations = restaurant.reservations.filter((reservation) => {
        return reservationId !== reservation._id.toString()
    })
    restaurant.reservations = newReservations
    await restaurant.save()
    await restaurant.populate('reservations')
    await Reservation.findByIdAndDelete(reservationId)
    res.status(200).json(restaurant)
}