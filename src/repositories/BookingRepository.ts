import { Booking, FilterPeriod } from '@/types/types'

const BookingRepository = {
    async save(bookings: Booking[] | Booking): Promise<boolean> {
        // TODO logic
        return false
    },
    async get(periods: FilterPeriod): Promise<Booking[]> {
        return []
    }
}

export default BookingRepository
