/**
 * Validate the Request Body to have a valid Bookings data.
 * @module
 */
import { NextFunction, Response } from 'express'
import { BookingsSaveRequest } from '../../@types/requests'
import { isValidDate, isValidString } from '../../utils/validation'

const validateBookings = (req: BookingsSaveRequest, res: Response, next: NextFunction): void => {
    const bookings = req.body
    if (Array.isArray(bookings)) {
        const bookingsAreValid = bookings.every(booking => {
            return Object.entries(booking).every(([field, value]) => {
                if (['first_name', 'last_name'].includes(field) && !isValidString(value)) {
                    return false
                }

                if (['booked_from', 'booked_to'].includes(field) && !isValidDate(value)) {
                    return false
                }

                // company is optional, so we validate only if value is given
                if (field === 'company' && !!value && !isValidString(value)) {
                    return false
                }

                return true
            })
        })
        if (bookingsAreValid) {
            next()
            return
        }
    }
    res.status(405).send('Invalid input')
}

export default validateBookings
