import db from "../db/connection.js"
import Reservation from "../models/reservation.js"

const insertData = async () => {
    const reservationOne = new Reservation.create({
      guests: 4,
      date: new Date('2024-09-01'),
      time: '18:30',
      isAvailable: true,
      location: "McDonalds"
    })

    await reservationOne.save()

    db.close()
}

insertData()