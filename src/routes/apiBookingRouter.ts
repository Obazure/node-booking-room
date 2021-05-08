import express from 'express'
import { BookingsFetchRequest, BookingsSaveRequest } from '@/types/requests'
import BookingRepository from '@/repositories/BookingRepository'
import validateBookings from '@/middleware/validators/validateBookings'
import convertBookingsTime from '@/middleware/convertors/convertBookingsTime'
import validatePeriodInParams from '@/middleware/validators/validatePeriodInParams'
import convertPeriodInParams from '@/middleware/convertors/convertPeriodInParams'

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

apiBookingRouter.get(
    '/',
    validatePeriodInParams,
    convertPeriodInParams,
    async (req: BookingsFetchRequest, res) => {
        const { booked_from, booked_to } = req.params
        const bookings = await BookingRepository.get({ booked_from, booked_to })
        res.status(200).json(bookings)
    }
)

export default apiBookingRouter
