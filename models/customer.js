import mongoose, { model, Schema } from "mongoose";

const customerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    myReservations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reservations"
        }
    ],
    pastReservations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Past Reservations"
        }
    ]
})

customerSchema.set('toJSON', { transform: (document, returnedObject) => { delete returnedObject.password } })

const Customer = new model('Customer', customerSchema)

export default Customer