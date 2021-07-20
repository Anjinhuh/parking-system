
const { MongoClient } = require('mongodb')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'estacionamento-controle'

module.exports = {
   async cadastrarVeiculo(req, res) {

    await client.connect()
    console.log('Conectado')
    const db = client.db(dbName)
    const collection = db.collection('veiculos')
    await collection.insertMany(
      [
        { 
          marca: req.body.marca,
          modelo: req.body.modelo , 
          placa: req.body.placa,
         cor: req.body.cor
        },
        ]
        )
        const findResult = await collection.find().toArray()

        console.log(findResult)
    return 'done.'
    
  },
  
  async buscar(req, res){
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const collection = db.collection('veiculos')
    const findResult = await collection.find().toArray()
      return res.send(findResult)
  }
}

async function buscar(){
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('veiculos')
  const findResult = await collection.find().forEach(def =>{
    if(def.marca){
      console.log('________')
      console.log(def)
      console.log('________')
    }
  })
}
async function deletar(){
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('veiculos')

  await collection.find().forEach(x =>{
    console.log(collection.deleteOne(x))
  })
  
}

