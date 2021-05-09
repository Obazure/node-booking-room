import { Sequelize } from 'sequelize'
import sequelize from './database'

describe('config/database', () => {
    it('return Sequelize instance', () => {
        expect(sequelize instanceof Sequelize).toEqual(true)
    })
})
