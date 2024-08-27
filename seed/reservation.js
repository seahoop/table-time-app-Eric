import db from "../db/connection.js"
import Reservation from "../models/reservation.js"

const reservationData = [
    {
      guests: 4,
      date: new Date('2024-09-01'),
      time: '18:30',
      isAvailable: true
    },
    {
      guests: 2,
      date: new Date('2024-09-02'),
      time: '19:00',
      isAvailable: true
    },
    {
      guests: 6,
      date: new Date('2024-09-03'),
      time: '20:00',
      isAvailable: false
    },
    {
      guests: 3,
      date: new Date('2024-09-04'),
      time: '17:45',
      isAvailable: true
    },
    {
      guests: 8,
      date: new Date('2024-09-05'),
      time: '18:00',
      isAvailable: false
    },
    {
      guests: 10,
      date: new Date('2024-09-06'),
      time: '19:30',
      isAvailable: true
    },
    {
      guests: 12,
      date: new Date('2024-09-07'),
      time: '20:15',
      isAvailable: true
    },
    {
      guests: 5,
      date: new Date('2024-09-08'),
      time: '18:45',
      isAvailable: false
    },
    {
      guests: 7,
      date: new Date('2024-09-09'),
      time: '19:15',
      isAvailable: true
    },
    {
      guests: 9,
      date: new Date('2024-09-10'),
      time: '20:30',
      isAvailable: false
    },
    {
      guests: 11,
      date: new Date('2024-09-11'),
      time: '17:30',
      isAvailable: true
    },
    {
      guests: 1,
      date: new Date('2024-09-12'),
      time: '18:00',
      isAvailable: true
    },
    {
      guests: 13,
      date: new Date('2024-09-13'),
      time: '19:00',
      isAvailable: false
    },
    {
      guests: 14,
      date: new Date('2024-09-14'),
      time: '20:00',
      isAvailable: true
    },
    {
      guests: 2,
      date: new Date('2024-09-15'),
      time: '17:00',
      isAvailable: true
    },
    {
      guests: 15,
      date: new Date('2024-09-16'),
      time: '18:30',
      isAvailable: false
    },
    {
      guests: 16,
      date: new Date('2024-09-17'),
      time: '19:30',
      isAvailable: true
    },
    {
      guests: 3,
      date: new Date('2024-09-18'),
      time: '20:45',
      isAvailable: false
    },
    {
      guests: 17,
      date: new Date('2024-09-19'),
      time: '18:15',
      isAvailable: true
    },
    {
      guests: 18,
      date: new Date('2024-09-20'),
      time: '19:45',
      isAvailable: true
    }
  ]

const insertData = async () => {
    const reservationPromises = reservationData.map((reservation) =>{
        return Reservation.create(reservation)
    })

    const reservations = await Promise.all(reservationPromises)

    db.close()
}

insertData()