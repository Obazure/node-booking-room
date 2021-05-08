import { Response, NextFunction } from 'express'
import { isValidDate } from '@/utils/validation'
import { BookingsFetchRequest } from '@/types/requests'

const validatePeriodInParams = (req: BookingsFetchRequest, res: Response, next: NextFunction) => {
    const { booked_from, booked_to } = req.query
    if (isValidDate(booked_from) && isValidDate(booked_to)) {
        next()
        return
    } else {
        res.status(405).send('Invalid input')
    }
}

export default validatePeriodInParams
