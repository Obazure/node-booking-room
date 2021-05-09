/* eslint-disable no-console */

import { log } from './logger'

describe('utils/logger', () => {
    beforeEach(() => {
        console.log = jest.fn()
        console.error = jest.fn()
    })

    it('should use console.log for collection info logs', () => {
        expect(console.log).toHaveBeenCalledTimes(0)
        log.info('hi')
        expect(console.log).toHaveBeenCalledTimes(1)
        expect(console.log).toHaveBeenCalledWith('hi')
    })
    it('should use console.error for collection error logs', () => {
        expect(console.error).toHaveBeenCalledTimes(0)
        log.error('hi')
        expect(console.error).toHaveBeenCalledTimes(1)
        expect(console.error).toHaveBeenCalledWith('hi')
    })
})
