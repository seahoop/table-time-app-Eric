import dotenv from "dotenv"
dotenv.config()
import express from "express"
const router = express.Router()
import bcrypt from "bcrypt"
import Customer from "../models/customer.js"
import Restaurant from "../models/restaurant.js"
import jwt from "jsonwebtoken"

const SALT_LENGTH = 12

router.post('/customers/signup', async (req, res) => {
    try {
        const customerInDatabase = await Customer.findOne({ username: req.body.username })
        if (customerInDatabase) {
            return res.status(400).json({ error: 'Username already taken.' })
        }
        const newCustomer = await Customer.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, SALT_LENGTH)
        })
        const token = jwt.sign({ username: newCustomer.username, _id: newCustomer._id }, process.env.JWT_SECRET)
        res.status(201).json({ newCustomer, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/customers/signin', async (req, res) => {
    try {
        const customer = await Customer.findOne({ username: req.body.username })
        if (customer && bcrypt.compareSync(req.body.password, customer.password)) {
            const token = jwt.sign({ username: customer.username, _id: customer._id, myReservations: customer.myReservations }, process.env.JWT_SECRET)
            res.status(200).json({ token })
        } else {
            res.json({ message: 'Invalid credentials.' })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/restaurants/signup', async (req, res) => {
    try {
        const restaurantInDatabase = await Restaurant.findOne({ username: req.body.username })
        if (restaurantInDatabase) {
            return res.status(400).json({ error: 'Username already taken.' })
        }
        const newRestaurant = await Restaurant.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, SALT_LENGTH)
        })
        const token = jwt.sign({ username: newRestaurant.username, _id: newRestaurant._id }, process.env.JWT_SECRET)
        res.status(201).json({ newRestaurant, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/restaurants/signin', async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({ username: req.body.username })
        if (restaurant && bcrypt.compareSync(req.body.password, restaurant.password)) {
            const token = jwt.sign({ username: restaurant.username, _id: restaurant._id }, process.env.JWT_SECRET)
            res.status(200).json({ token })
        } else {
            res.json({ message: 'Invalid credentials.' })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

export default router