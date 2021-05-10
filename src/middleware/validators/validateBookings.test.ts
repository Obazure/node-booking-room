/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { NextFunction } from 'express'
import { BookingsSaveRequest } from '../../@types/requests'
import { generateMockedResponse, MockedResponse } from '../../@testUtils/mocks'
import validateBookings from './validateBookings'

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
        const mockData: BookingsSaveRequest = {
            body: [
                {
                    first_name: 'John',
                    last_name: 'Doe',
                    booked_from: '2021-05-07T17:32:28Z',
                    booked_to: '2021-05-09T17:32:28Z',
                    company: 'some-company',
                },
            ],
        }
        validateBookings(mockData, mockResponse, mockNext)

        expect(mockNext).toHaveBeenCalledTimes(1)
    })
    it('should not pass if body is not array', () => {
        const mockData = { foo: 'bar' }
        // @ts-ignore
        validateBookings(mockData, mockResponse, mockNext)
        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(405)
        expect(mockResponse.send).toHaveBeenCalledTimes(1)
        expect(mockResponse.send).toHaveBeenCalledWith('Invalid input')
    })
    it('should not pass first_name', () => {
        const mockData = {
            body: [
                {
                    first_name: 777,
                    last_name: 'Doe',
                    booked_from: '2021-05-07T17:32:28Z',
                    booked_to: '2021-05-09T17:32:28Z',
                },
            ],
        }
        // @ts-ignore
        validateBookings(mockData, mockResponse, mockNext)
        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(405)
        expect(mockResponse.send).toHaveBeenCalledTimes(1)
        expect(mockResponse.send).toHaveBeenCalledWith('Invalid input')
    })
    it('should not pass last_name', () => {
        const mockData = {
            body: [
                {
                    first_name: 'John',
                    last_name: 777,
                    booked_from: 'asdasd',
                    booked_to: '2021-05-09T17:32:28Z',
                },
            ],
        }
        // @ts-ignore
        validateBookings(mockData, mockResponse, mockNext)
        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(405)
        expect(mockResponse.send).toHaveBeenCalledTimes(1)
        expect(mockResponse.send).toHaveBeenCalledWith('Invalid input')
    })
    it('should not pass booked_from', () => {
        const mockData = {
            body: [
                {
                    first_name: 'John',
                    last_name: 'Doe',
                    booked_from: 'asdasd',
                    booked_to: '2021-05-09T17:32:28Z',
                },
            ],
        }
        // @ts-ignore
        validateBookings(mockData, mockResponse, mockNext)
        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(405)
        expect(mockResponse.send).toHaveBeenCalledTimes(1)
        expect(mockResponse.send).toHaveBeenCalledWith('Invalid input')
    })
    it('should not pass booked_to', () => {
        const mockData = {
            body: [
                {
                    first_name: 'John',
                    last_name: 'Doe',
                    booked_from: '2021-05-07T17:32:28Z',
                    booked_to: 'asdasd',
                },
            ],
        }
        // @ts-ignore
        validateBookings(mockData, mockResponse, mockNext)
        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(405)
        expect(mockResponse.send).toHaveBeenCalledTimes(1)
        expect(mockResponse.send).toHaveBeenCalledWith('Invalid input')
    })
    it('should not pass company when presented', () => {
        const mockData = {
            body: [
                {
                    first_name: 'John',
                    last_name: 'Doe',
                    booked_from: '2021-05-07T17:32:28Z',
                    booked_to: '2021-05-09T17:32:28Z',
                    company: 777666555,
                },
            ],
        }
        // @ts-ignore
        validateBookings(mockData, mockResponse, mockNext)
        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(405)
        expect(mockResponse.send).toHaveBeenCalledTimes(1)
        expect(mockResponse.send).toHaveBeenCalledWith('Invalid input')
    })
})
