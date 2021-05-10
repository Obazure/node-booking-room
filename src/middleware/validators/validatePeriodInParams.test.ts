/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { NextFunction } from 'express'
import { generateMockedResponse, MockedResponse } from '../../@testUtils/mocks'
import { BookingsFetchRequest } from '../../@types/requests'
import validatePeriodInParams from './validatePeriodInParams'

describe('middleware/validators/validateBookings', () => {
    let mockResponse: MockedResponse
    let mockNext: NextFunction

    beforeEach(() => {
        mockNext = jest.fn()
        mockResponse = generateMockedResponse()
    })
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should validate and pass the validation', () => {
        const mockData: BookingsFetchRequest = {
            query: {
                booked_from: '2021-05-07T17:32:28Z',
                booked_to: '2021-05-09T17:32:28Z',
            },
        }
        // @ts-ignore
        validatePeriodInParams(mockData, mockResponse, mockNext)

        expect(mockNext).toHaveBeenCalledTimes(1)
    })
    it('should not pass booked_from', () => {
        const mockData: BookingsFetchRequest = {
            query: {
                booked_from: 'asdasd',
                booked_to: '2021-05-09T17:32:28Z',
            },
        }
        // @ts-ignore
        validatePeriodInParams(mockData, mockResponse, mockNext)
        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(405)
        expect(mockResponse.send).toHaveBeenCalledTimes(1)
        expect(mockResponse.send).toHaveBeenCalledWith('Invalid input')
    })
    it('should not pass booked_to', () => {
        const mockData: BookingsFetchRequest = {
            query: {
                booked_from: '2021-05-07T17:32:28Z',
                booked_to: 'asdasd',
            },
        }
        // @ts-ignore
        validatePeriodInParams(mockData, mockResponse, mockNext)
        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(405)
        expect(mockResponse.send).toHaveBeenCalledTimes(1)
        expect(mockResponse.send).toHaveBeenCalledWith('Invalid input')
    })
})
