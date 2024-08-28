import express from "express"
const router = express.Router()
import * as restaurantCtrl from "../controllers/restaurant.js"

router.get("/:restaurantId", restaurantCtrl.showRestaurantDashboard)

router.put("/:restaurantId/edit", restaurantCtrl.editRestaurantDashboard)

router.post("/:restaurantId/reservations/new", restaurantCtrl.newReservation)

router.put("/:restaurantId/reservations/:reservationId/edit", restaurantCtrl.editReservation)

router.delete("/:restaurantId/reservations/:reservationId", restaurantCtrl.deleteReservation)

export default router