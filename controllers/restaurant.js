import express from "express"
const router = express.Router()
import Restaurant from "../models/restaurant.js"

router.get("/:restaurantId", async (req, res) => {
    const restaurantId = req.params.restaurantId
    const restaurant = await Restaurant.findById(restaurantId).populate('reservations')
    res.status(200).json({ restaurant })
})
router.put("/:restaurantId/edit", async (req, res) => {
    const restaurantId = req.params.restaurantId
    const restaurant = await Restaurant.findByIdAndUpdate(restaurantId, req.body).populate('reservations')
    res.status(200).json(restaurant)
})
router.post("/:restaurantId/reservations/new", async (req, res) => {
    res.send("add reservation")
})
router.put("/:restaurantId/reservations/edit", async (req, res) => {
    res.send("edit reservation")
})
router.delete("/:restaurantId/reservations", async (req, res) => {
    res.send("delete restaurant")
})

export default router