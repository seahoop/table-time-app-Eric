import express from "express"
const router = express.Router()
import Restaurant from "../models/restaurant.js" 

router.get("/:restaurantId", async (req, res) => {
    const id = req.params.restaurantId
    const restaurant = await Restaurant.findById(id)
    res.send(`this is the restaurant's information ${restaurant}`)
})
router.put("/:restaurantId/edit", async (req, res) => {
    const id = req.params.restaurantId
    const restaurant = await Restaurant.findByIdAndUpdate(id, { name: "chilis", about: "mid food"})
    res.send(`edit what the customer sees ${restaurant.name} ${restaurant.about}`)
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