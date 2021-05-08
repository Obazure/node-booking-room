import { Response, NextFunction } from 'express'
import { BookingsSaveRequest } from '@/types/requests'
import { isValidDate, isValidId, isValidString } from '@/utils/validation'

const validateBookings = (req: BookingsSaveRequest, res: Response, next: NextFunction) => {
    const bookings = req.body
    if (Array.isArray(bookings)) {
        const bookingsAreValid = bookings.every((booking, index) => {
            const bookingIsValid = Object.entries(booking).every(([field, value]) => {
                if (field === 'id' && !isValidId(value)) {
                    return false
                }

                if (['first_name', 'last_name'].includes(field) && !isValidString(value)) {
                    return false
                }

                if ((field.endsWith('_from') || field.endsWith('_to')) && !isValidDate(value)) {
                    return false
                }

                if (field === 'company' && !!value && !isValidString(value)) {
                    return false
                }

                return true
            })
            return bookingIsValid
        })
        if (bookingsAreValid) {
            next()
            return
        }
    }
    res.status(405).send('Invalid input')
}

export default validateBookings
