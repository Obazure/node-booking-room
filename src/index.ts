import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3500
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})

export default app
