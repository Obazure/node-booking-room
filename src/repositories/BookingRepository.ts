import { Booking, FilterPeriod } from '@/types/types'

const BookingRepository = {
    async save(bookings: Booking[] | Booking): Promise<boolean> {
        // TODO logic
        return false
    },
    async get(periods: FilterPeriod): Promise<Booking[]> {
        // TODO logic
        return []
    },
    async remove(bookingId: number): Promise<boolean> {
        // TODO logic
        return false
    },
}

export default BookingRepository
