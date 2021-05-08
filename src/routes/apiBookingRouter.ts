import express from 'express'
import { BookingsSaveRequest } from '@/types/requests'
import BookingRepository from '@/repositories/BookingRepository'
import validateBookings from '@/middleware/validators/validateBookings'
import convertBookingsTime from '@/middleware/convertors/convertBookingsTime'

const apiBookingRouter = express.Router()

apiBookingRouter.post(
    '/',
    validateBookings,
    convertBookingsTime,
    async (req: BookingsSaveRequest, res) => {
        const bookings = req.body
        const saveStatus = await BookingRepository.save(bookings)
        if (saveStatus) {
            res.status(200).send('Successful operation')
        } else {
            res.status(202).send('Booking not possible, room is not available')
        }
    }
)



export default apiBookingRouter
