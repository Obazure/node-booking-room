export interface FilterPeriod {
    booked_from: string | Date
    booked_to: string | Date
}

export type Booking = {
    id?: number
    first_name: string
    last_name: string
    company?: string
    booked_from: string | Date
    booked_to: string | Date
}
