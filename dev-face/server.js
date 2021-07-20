var http = require('http')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dbExec = require('./files-script/database.js')

app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', function(){
    console.log('ok')
})
app.post('/cadastro', dbExec.cadastrarVeiculo)
app.get('/veiculosPatio', dbExec.buscar)
 
var server = http.createServer(app); 
server.listen(3001);
console.log("Servidor escutando na porta 3030...")