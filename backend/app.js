const express = require('express')
const admin = require('./routes/admin')
const logger = require('morgan')
const bodyParser = require('body-parser')

const db = require('./models')

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
        return db.sequelize.sync()
    })
    .then(() => {
        console.log('DB Synv complete')
    })
    .catch(err => {
        console.error('Unbale to connect to teh database', err)
    })

const app = express()
const port = 3001

app.get('/', function(req,res){
    res.send('first app')
})
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', admin)


app.listen(port, function(){
    console.log('Express Listening on port', port)
})