import express from 'express'
import { BookingsSaveRequest } from '@/types/requests'

const apiBookingRouter = express.Router()

apiBookingRouter.post('/', async (req: BookingsSaveRequest, res) => {
    const bookings = req.body
    const saveStatus = false // do save bookings
    if (saveStatus) {
        res.status(200).send('Successful operation')
    } else {
        res.status(202).send('Booking not possible, room is not available')
    }
})

export default apiBookingRouter
