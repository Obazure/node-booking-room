import { Booking, FilterPeriod } from '../@types/types'
import BookingModel from '../models/BookingModel'
import { log } from '../utils/logger'

const BookingService = {
    async save(bookings: Booking[] | Booking): Promise<boolean> {
        try {

            // TODO logic
        } catch (e) {
            log.error(e)
            return false
        }
        return false
    },
    async get({ booked_from, booked_to }: FilterPeriod): Promise<Booking[]> {
        try {
            const bookings = await BookingModel.select()
                .where('booked_from', '>=', booked_from)
                .andWhere('booked_to', '<=', booked_to)
            return bookings
        } catch (e) {
            log.error(e)
            return []
        }
    },
    async remove(bookingId: number): Promise<boolean> {
        try {
            const result = await BookingModel.where('id', bookingId).del()
            return result > 0
        } catch (e) {
            log.error(e)
            return false
        }
    },
}

export default BookingService
