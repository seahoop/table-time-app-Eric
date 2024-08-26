import express from "express";
const router = express.Router()
import jwt from "jsonwebtoken"

router.get('/sign-token', async (req, res) => {
    const user = {
        _id: 1,
        username: 'test',
        password: 'test',
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET)

    res.json({ token })
})

router.post('/verify-token', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    res.json({ decoded })
})

export default router