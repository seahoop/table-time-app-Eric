import { Schema, model } from "mongoose"

const reservationSchema = new Schema({
    guests: {
        type: Number,
        required: true,
        min: 1,
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
        match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
})

const Reservation = model('Reservation', reservationSchema)

export default Reservation
