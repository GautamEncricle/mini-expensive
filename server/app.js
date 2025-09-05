import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import mainRouter from './src/routes/index.js'
import cors from 'cors'

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(urlencoded({ extended: false }))

app.use('/api/v1', mainRouter)
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
)

export default app
