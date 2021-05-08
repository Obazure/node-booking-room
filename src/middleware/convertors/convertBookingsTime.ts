import { Response, NextFunction } from 'express'
import { BookingsSaveRequest } from '../../@types/requests'
import { convertToDate } from '../../utils/converting'

const convertBookingsTime = (req: BookingsSaveRequest, res: Response, next: NextFunction): void => {
    const bookings = req.body
    bookings.forEach((booking, index) => {
        Object.entries(booking).forEach(([field, value]) => {
            if (value && (field.endsWith('_from') || field.endsWith('_to'))) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                req.body[index][field] = convertToDate(value as string)
            }
        })
    })
    next()
}
export default convertBookingsTime
