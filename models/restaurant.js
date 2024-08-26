import { Schema, model } from 'mongoose'

const restaurantSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    reservations: [
        {
            type: Mongoose.Schema.Types.ObjectId,
            ref: 'reservations'
        }
    ]
})

export const Restaurant = model('Restaurant', restaurantSchema)