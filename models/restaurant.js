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
            type: Schema.Types.ObjectId,
            ref: 'Reservation'
        }
    ]
})

restaurantSchema.set('toJSON', { transform: (document, returnedObject) => { delete returnedObject.password } })

const Restaurant = model('Restaurant', restaurantSchema)
export default Restaurant