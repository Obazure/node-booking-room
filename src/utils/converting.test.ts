import { convertToDate } from './converting'

describe('utils/converting', () => {
    it('convertToDate should return Date rounded till minues', () => {
        const result = convertToDate('2021-05-07T17:32:28Z')
        expect(result instanceof Date).toEqual(true)
        expect(result.getTime()).toEqual(1620408720000) // '2021-05-07T17:32:00.000Z'
    })
})
