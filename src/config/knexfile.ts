import { Knex } from 'knex'
import Config = Knex.Config

const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'test'
const MYSQL_USER = process.env.MYSQL_USER || 'root'
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || ''
const DB_HOST = process.env.DB_HOST || '127.0.0.1'
const DB_PORT = Number(process.env.DB_PORT) || 3306

const mysql2connectionConfig = {
    host: DB_HOST,
    port: DB_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
}

const connectionSettings: Config = {
    client: 'mysql2',
    connection: mysql2connectionConfig,
    migrations: {
        tableName: 'migrations',
        directory: '../migrations',
    },
}

export default connectionSettings
