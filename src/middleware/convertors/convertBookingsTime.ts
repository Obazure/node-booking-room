/**
 * Converts period filtration fields in Request Params from string to Date objects to interact via Data Api.
 * @module
 */
import { Response, NextFunction } from 'express'
import { BookingsSaveRequest } from '../../@types/requests'
import { convertToDate } from '../../utils/converting'

const convertBookingsTime = (req: BookingsSaveRequest, res: Response, next: NextFunction): void => {
    const bookings = req.body
    bookings.map((booking, index) => {
        Object.entries(booking).map(([field, value]) => {
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
