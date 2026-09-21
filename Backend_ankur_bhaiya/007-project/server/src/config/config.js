import dotenv from 'dotenv'

dotenv.config()

const config = {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI,
    ACCESS_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET : process.env.REFRESH_TOKEN_SECRET,
    SALT_ROUNDS:Number(process.env.SALT_ROUNDS)
}

export default config