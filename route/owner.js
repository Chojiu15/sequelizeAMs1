const models = require('../models')

module.exports = app => {

    app.get('/owners', (req, res) => {
        models
        .Owner
        .findAll()
        .then(owner => res.json(owner))
    })

    app.post('/owners', (req, res) => {
        models
        .Owner
        .create(req.body)
        .then(owner => res.json(owner))
    })

}