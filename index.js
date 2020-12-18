const express = require('express')
const app = express()
const models = require('./models')
const bodyParser = require('body-parser')
const port = 3002

app.use(bodyParser.urlencoded({
    urlencoded: true
}))

require('./route/car')(app)
require('./route/owner')(app)


models
    .sequelize
    .sync()
    .then(() => {
        app.listen(port, console.log(`Server listening on ${port}`))
    })