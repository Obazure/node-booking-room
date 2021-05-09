/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { BookingsFetchRequest } from '../../@types/requests'
import convertPeriodInParams from './convertPeriodInParams'

describe('middleware/convertors/convertPeriodInParams', () => {
    it('should convert the _from, _to fields to Date', () => {
        const fakeRequest: BookingsFetchRequest = {
            query: {
                booked_from: '2021-05-07T17:32:28Z',
                booked_to: '2021-05-09T17:32:28Z',
            },
        }
        const next = jest.fn()
        expect((fakeRequest.query.booked_from as any) instanceof Date).toEqual(false)
        expect((fakeRequest.query.booked_to as any) instanceof Date).toEqual(false)
        // @ts-ignore
        convertPeriodInParams(fakeRequest, {}, next)
        expect((fakeRequest.query.booked_from as any) instanceof Date).toEqual(true)
        expect((fakeRequest.query.booked_from as Date).getTime()).toEqual(1620408720000)
        expect((fakeRequest.query.booked_to as any) instanceof Date).toEqual(true)
        expect((fakeRequest.query.booked_to as Date).getTime()).toEqual(1620581520000)
    })
})
