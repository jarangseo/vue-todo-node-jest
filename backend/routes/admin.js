const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', function(req,res) {
    res.send('admin app')
})

router.get('/todos', function(_, res) {
    models.Todos.findAll({
        //
    }).then((todos) => {
        res.send({todos: todos})
    })
})

router.post('/todo', function(req,res) {
    models.Todos.create({
        name: req.body.name,
        done: req.body.done
    }).then(() => {
        res.send(200)
    })
})

router.put('/todo/edit/:id', function(req,res) {
    models.Todos.update({
        name: req.body.name,
        done: req.body.done
    },
    {
        where: {id: req.params.id}
    }).then(() => {
        res.send(200)
    })
})

router.delete('/todo/delete/:id', function(req,res) {
    models.Todos.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send(200)
    })
})

module.exports = router