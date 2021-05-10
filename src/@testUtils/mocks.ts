/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Response } from 'express'

export type MockedResponse = Response & {
    status?: Function
    json?: Function
    send?: Function
}

export const generateMockedResponse = (): MockedResponse => {
    // @ts-ignore
    const res: MockedResponse = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    res.send = jest.fn().mockReturnValue(res)
    return res
}
