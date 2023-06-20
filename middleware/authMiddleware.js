import jwt from 'jsonwebtoken'

export const authMiddleWare = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).send('Token is invalid')
    }
    jwt.verify(token, JWT_SECRET_KEY, (err, payload) => {
        if (err) {
            return res.status(401).send('Token is wrong!')
        }
        req.payload = payload
        next()
    })
}