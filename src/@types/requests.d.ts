import { Request as BaseRequest } from 'express'
import { Booking } from '@/types/types'

export interface BookingsSaveRequest extends BaseRequest {
    body: Booking[]
}
