import express from "express"
const router = express.Router()
import * as customerCtrls from '../controllers/customer.js'

router.get("/:customerId", customerCtrls.showDashboard)

router.get("/:customerId/restaurants/:restaurantId", customerCtrls.showRestaurant)

router.put("/:customerId/restaurants/:restaurantId/reservations/:reservationId/edit",customerCtrls.editReservation)

router.delete("/:customerId/restaurants/:restaurantId/reservations/:reservationId", customerCtrls.cancelReservation)

router.put("/:customerId/restaurants/:restaurantId/reservations/:reservationId", customerCtrls.makeReservation)

router.put("/:customerId/restaurants/:restaurantId/favorites", customerCtrls.favRestaurant)

export default router