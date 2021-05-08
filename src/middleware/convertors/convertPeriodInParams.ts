import { Response, NextFunction } from 'express'
import { BookingsFetchRequest } from '@/types/requests'
import { convertToDate } from '@/utils/converting'

const convertPeriodInParams = (req: BookingsFetchRequest, res: Response, next: NextFunction) => {
    const period = req.params

    Object.entries(period).forEach(([field, value]) => {
        if (value && (field.endsWith('_from') || field.endsWith('_to'))) {
            // @ts-ignore
            req.params[index][field] = convertToDate(value)
        }
    })

    next()
}
export default convertPeriodInParams
