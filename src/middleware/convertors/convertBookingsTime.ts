import { Response, NextFunction } from 'express'
import { BookingsSaveRequest } from '@/types/requests'
import { convertToDate } from '@/utils/converting'

const convertBookingsTime = (req: BookingsSaveRequest, res: Response, next: NextFunction) => {
    const bookings = req.body
    bookings.forEach((booking, index) => {
        Object.entries(booking).forEach(([field, value]) => {
            if (value && (field.endsWith('_from') || field.endsWith('_to'))) {
                // @ts-ignore
                req.body[index][field] = convertToDate(value)
            }
        })
    })
    next()
}
export default convertBookingsTime
