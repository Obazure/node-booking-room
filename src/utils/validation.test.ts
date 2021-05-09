import { isValidDate, isValidId, isValidString } from './validation'

describe('utils/validation', () => {
    it('isValidId should return true for number input', () => {
        const result = isValidId(123)
        expect(result).toEqual(true)
    })
    it('isValidId should return false for zero', () => {
        const result = isValidId(0)
        expect(result).toEqual(false)
    })
    it('isValidId should return false for non-number input', () => {
        const result = isValidId('i-am-string-id')
        expect(result).toEqual(false)
    })

    it('isValidString should return true for string input', () => {
        const result = isValidString('i-am-string')
        expect(result).toEqual(true)
    })
    it('isValidString should return false for non-string input', () => {
        const result = isValidString(777)
        expect(result).toEqual(false)
    })

    it('isValidDate should return true for date-time format input', () => {
        const result = isValidDate('2021-05-07T17:32:28Z')
        expect(result).toEqual(true)
    })
    it('isValidDate should return false for non-valid date-time format input', () => {
        const result = isValidDate('i-am-not-a-date')
        expect(result).toEqual(false)
    })
})
