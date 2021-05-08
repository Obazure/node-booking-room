import { Booking, FilterPeriod } from './types'

export interface BookingsSaveRequest extends BaseRequest {
    body: Booking[]
}

export interface BookingsFetchRequest extends BaseRequest {
    query: FilterPeriod
}
