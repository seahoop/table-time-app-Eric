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
        default: "Your Restaurant Name"
    },
    about: {
        type: String,
        default: "Tell us about your restaurant."
    },
    address: {
        type: String,
        default: "Restaurant Address goes here."
    },
    image: {
        type: String,
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