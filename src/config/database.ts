import { Options, Sequelize } from 'sequelize'

const isDevelopment = process.env.NODE_ENV === 'development'

const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'test'
const MYSQL_USER = process.env.MYSQL_USER || 'root'
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || ''
const DB_HOST = process.env.DB_HOST || '127.0.0.1'
const DB_PORT = process.env.DB_PORT || 3306

const dbOptions: Options = {
    host: DB_HOST as string,
    port: DB_PORT as number,
    dialect: 'mysql',
}

if (!isDevelopment) {
    dbOptions.logging = false
}

export const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, dbOptions)
