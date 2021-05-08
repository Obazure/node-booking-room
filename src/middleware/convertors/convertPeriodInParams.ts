import { Response, NextFunction } from 'express'
import { BookingsFetchRequest } from '../../@types/requests'
import { convertToDate } from '../../utils/converting'

const convertPeriodInParams = (
    req: BookingsFetchRequest,
    res: Response,
    next: NextFunction
): void => {
    const period = req.query

    Object.entries(period).map(([field, value]) => {
        if (value && (field.endsWith('_from') || field.endsWith('_to'))) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            req.query[field] = convertToDate(period[field])
        }
    })

    next()
}
export default convertPeriodInParams
