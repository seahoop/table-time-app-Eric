import express from "express"
const router = express.Router()

router.get("/:restaurantId", async (req, res) => {
    res.send("Displays the restaurant's page")
})
router.put("/:restaurantId/edit", async (req, res) => {
    res.send("edit what the customer sees")
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