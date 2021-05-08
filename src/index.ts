import express from 'express'
import apiBookingRouter from './routes/apiBookingRouter'

const app = express()
app.use(express.json())

app.use('/booking', apiBookingRouter)

const PORT = process.env.NODE_ENV || 3500
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})

export default app
