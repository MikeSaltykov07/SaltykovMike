require('dotenv').config()
const express = require('express')
const app = express()
const pool = require('./config/config')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.route('/api/students').post((request,response) =>{
    let { name, surname} = request.body

    pool.query('Insert into students (name, surname) VALUES (?,?)',
    [name, surname], (err, result) => {
        console.log(err);
        response.send(result);
    })
})

app.route('/api/students/:n_z').delete((request, response) => {
    pool.query('Delete from students where n_z = ?', [req.params.n_z],
    (err, result) => {
        console.lor(err)
        response.send(result)
    })
})

//console.log(process.env)

app.route('/').get((request, response) => {
    response.send('Hello world!')
})

app.route('/api/t/:group').get((request, response) => {
    let group = request.params["group"]
    response.send(`Hello  ${group} !`)
})

app.router('/api/students/:n_z').put((request, response))

app.route('/api/students').get((req, res) => {
    pool.query('Select * from students', (err, result, fields) => {
        if (err) throw err
        res.send(result);
    })
})

app.route('/api/students/:n_z').get((request,response) => {
    const n_z = request.params['n_z']
    pool.query('Select * from students where n_z = ?',  [n_z], 
       (err, result, fields) => {
        if (err) throw err
        response.send(result);
    })
})

app.listen(8080, () => {
    console.log('Server started')
})