import { Booking as BookingType, FilterPeriod } from '../@types/types'
import Booking from '../models/Booking'
import { log } from '../utils/logger'

const BookingService = {
    async save(bookings: BookingType[]): Promise<boolean> {
        try {
            const periods = bookings.map(({ booked_from, booked_to }) => ({
                booked_from,
                booked_to,
            }))
            const bookingsExist = await Booking.existInPeriods(periods)
            if (!bookingsExist) {
                const status = await Booking.saveAll(bookings)
                if (status) {
                    return true
                }
            }
            return false
        } catch (e) {
            log.error(e)
            return false
        }
    },
    async get(period: FilterPeriod): Promise<BookingType[]> {
        try {
            return await Booking.filterByPeriod(period)
        } catch (e) {
            log.error(e)
            return []
        }
    },
    async remove(bookingId: number): Promise<boolean> {
        try {
            const result = await Booking.delete(bookingId)
            return result > 0
        } catch (e) {
            log.error(e)
            return false
        }
    },
}

export default BookingService
