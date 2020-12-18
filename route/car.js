const models = require('../models')

module.exports = app => {


app.get('/cars', (req, res) => {
    models 
    .Car
    .findAll({
        include : [models.Owner]
    })
    .then(cars => res.json(cars))
})

app.get('/cars/:id', (req, res) => {
    models
    .Car
    .findByPk(req.params.id)
    .then(cars => res.json(cars))
})

app.post('/cars', (req, res) => {
    models
    .Car
    .create(req.body)
    .then(newCar => {
        newCar.addOwner(req.body.ownerId)
        res.json(newCar)
    })
})

}
