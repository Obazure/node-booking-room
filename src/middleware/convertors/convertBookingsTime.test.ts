/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { BookingsSaveRequest } from '../../@types/requests'
import convertBookingsTime from './convertBookingsTime'

describe('middleware/convertors/convertBookingsTime', () => {
    it('should convert the _from, _to fields to Date', () => {
        const fakeRequest: BookingsSaveRequest = {
            body: [
                {
                    first_name: 'John',
                    last_name: 'Doe',
                    booked_from: '2021-05-07T17:32:28Z',
                    booked_to: '2021-05-09T17:32:28Z',
                },
            ],
        }
        const next = jest.fn()
        expect((fakeRequest.body[0].booked_from as any) instanceof Date).toEqual(false)
        expect((fakeRequest.body[0].booked_to as any) instanceof Date).toEqual(false)
        // @ts-ignore
        convertBookingsTime(fakeRequest, {}, next)
        expect((fakeRequest.body[0].booked_from as any) instanceof Date).toEqual(true)
        expect((fakeRequest.body[0].booked_from as Date).getTime()).toEqual(1620408720000)
        expect((fakeRequest.body[0].booked_to as any) instanceof Date).toEqual(true)
        expect((fakeRequest.body[0].booked_to as Date).getTime()).toEqual(1620581520000)
        expect(next).toHaveBeenCalledTimes(1)
    })
})
