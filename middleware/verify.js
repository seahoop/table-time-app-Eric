import jwt from "jsonwebtoken"

function verifyCustomerToken(req, res, next) {
    try {
        const token = req.headers.authentication.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.customer = decoded
        next()
    } catch (error) {
        res.status(401).json({ error: 'invalid token' })
    }
}

function verifyRestaurantToken(req, res, next) {
    try {
        const token = req.headers.authentication.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.restaurant = decoded
        next()
    } catch (error) {
        res.status(401).json({ error: 'invalid token' })
    }
}

export {
    verifyCustomerToken,
    verifyRestaurantToken
}