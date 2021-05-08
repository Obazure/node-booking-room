import Knex from 'knex'
import connectionSettings from '../config/knexfile'

const database = Knex(connectionSettings)
export type Database = typeof database

export default database
