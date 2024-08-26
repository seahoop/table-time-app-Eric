import db from "../db/connection.js"
import mongoose from "mongoose"
import Customer from "../models/customer.js"
import dotenv from "dotenv"
import express from "express"
const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.listen(3000, () => {
    console.log('listening on port 3000')
})

const insertData = async () => {
    // await db.dropDatabase();

    const user1 = new Customer({
        username: "jaxonSmith",
        password: "Xp34tb"
    });

    await user1.save()

    const user2 = new Customer({
        username: "AvaJohnson",
        password: "qw7004"
    });

    await user2.save()

    const user3 = new Customer({
        username: "LiamBrown",
        password: "z44567"
    });

    await user3.save()

    const user4 = new Customer({
        username: "OlivaWills",
        password: "Qwbbt3"
    });

    await user4.save()

    const user5 = new Customer({
        username: "Rodney",
        password: "zeya2122"
    });

    await user5.save()

    const user6 = new Customer({
        username: "Ismael",
        password: "lebron6"
    });

    await user6.save()

    const user8 = new Customer({
        username: "Eric",
        password: "eliminate223"
    });

    await user8.save()


    const user9 = new Customer({
        username: "Waleed",
        password: "heyhey2998"
    });

    await user9.save()

    const user10 = new Customer({
        username: "NoahJones",
        password: "088bbtw"
    });

    await user10.save()


    db.close()
}

insertData()