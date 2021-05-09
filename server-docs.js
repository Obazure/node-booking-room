/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const express = require('express')
const { Router } = require('express')

const app = express()
const docsRouter = Router()

app.use(express.static(path.join(__dirname, 'docs')))

docsRouter.get('*', async (req, res, next) => {
    const fileUrlPath = req.path.toString().substring(1).split('/')
    const filePath = path.join.apply(null, [__dirname, 'docs', ...fileUrlPath])
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath)
    } else {
        next()
    }
})
app.use('/docs', docsRouter)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'))
})

const PORT = process.env.NODE_PORT || 9000
app.listen(PORT, '0.0.0.0', () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${PORT}...`)
})
