import { Request as BaseRequest } from 'express'
import {Booking, FilterPeriod} from '@/types/types'

export interface BookingsSaveRequest extends BaseRequest {
    body: Booking[]
}

export interface BookingsFetchRequest extends BaseRequest{
    query: FilterPeriod
}
