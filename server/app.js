import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import mainRouter from './src/routes/index.js'
import cors from 'cors'

const app = express()
app.use(cookieParser())
app.use(express.json())

const whitelist = ['http://localhost:5173', 'http://localhost:5174']

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))
app.use('/api/v1', mainRouter)

// app.use(
//   cors({
//     origin: ['http://localhost:5173', 'http://localhost:5174'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//   })
// )
// const corsOptions = {
//   origin: 'http://localhost:5173',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// }
// app.use(cors(corsOptions))

export default app
