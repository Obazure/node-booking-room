/**
 * Describe the logic how to handle http requests.
 * @module
 */
import express from 'express'
import { BookingsFetchRequest, BookingsSaveRequest } from '../@types/requests'
import BookingService from '../services/BookingService'
import validateBookings from '../middleware/validators/validateBookings'
import convertBookingsTime from '../middleware/convertors/convertBookingsTime'
import validatePeriodInParams from '../middleware/validators/validatePeriodInParams'
import convertPeriodInParams from '../middleware/convertors/convertPeriodInParams'
import { isValidId } from '../utils/validation'

const apiBookingRouter = express.Router()

apiBookingRouter.post(
    '/',
    validateBookings,
    convertBookingsTime,
    async (req: BookingsSaveRequest, res) => {
        const bookings = req.body
        const saveStatus = await BookingService.save(bookings)
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
        const { booked_from, booked_to } = req.query
        const bookings = await BookingService.get({ booked_from, booked_to })
        res.status(200).json(bookings)
    }
)

apiBookingRouter.delete('/:id', async (req, res) => {
    const bookingId = Number(req.params.id)
    if (bookingId && isValidId(bookingId)) {
        const removalStatus = await BookingService.remove(bookingId)
        if (removalStatus) {
            res.status(200).send('Successful operation')
            return
        }
    }
    res.status(405).send('Invalid input')
})

export default apiBookingRouter
