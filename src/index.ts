/**
 * Launch the service api server. Contain non exportable function start(). Service listen port 4000 by default.
 * @module index (entrypoint)
 */
import express, { json as jsonMiddleware } from 'express'
import apiBookingRouter from './routes/apiBookingRouter'
import sequelize from './config/database'
import { log } from './utils/logger'

const app = express()
app.use(jsonMiddleware())

app.use('/booking', apiBookingRouter)

async function start(): Promise<void> {
    await sequelize.sync() // {alter: true}
    const PORT = process.env.NODE_PORT || 4000
    app.listen(PORT, () => {
        log.info(`Server started on port ${PORT}.`)
    })
}

start()

export default start
