const log = console.log
const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

const app = express()
const port = process.env.port || 3000

// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Start port
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function() {
//     console.log(this)
//     return {}
// }

// console.log(JSON.stringify(pet))