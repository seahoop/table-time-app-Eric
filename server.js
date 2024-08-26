import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
import mongoose from "mongoose"
import cors from "cors"

const PORT = 3000

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connect.name}`)

    app.listen(PORT, () => {
        console.log(`Express server ready on PORT: ${PORT}`)
    })
})