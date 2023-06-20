import jwt from 'jsonwebtoken'

export const TOKEN = {
    generator: (email) => {
        const token = jwt.sign({ email }, process.env.JWT_SECRET)
        return token
    },
    verify: (token) => {
        jwt.verify(token, process.env.JWT_SECRET, async (err, verify) => {
            if (err) {
                return res.status(401).send('Token is wrong or expired!')
            }
            return verify
        })
    }
}