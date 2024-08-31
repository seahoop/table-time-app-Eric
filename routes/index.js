import express from "express"
const router = express.Router()
import { index } from "../controllers/restaurant.js"

router.get('/restaurants/index', index)

export default index