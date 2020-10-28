const express = require('express')
const path = require('path')
const morgan = require('morgan')
const MongoBot = require('./dao/mongoBot')
const dao = require('./dao/dao')

// start restful
const app = express()
const port = 3000
const indexFile = path.join(__dirname, '../build/index.html')
const PUBLIC_DIR = path.join(__dirname, '../build')

app.use(morgan('dev'))
app.use(express.static(PUBLIC_DIR))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/*', (req, res) => {
    res.sendFile(indexFile)
})

// start database 
const url = 'mongodb://root:example@localhost:27017'
const dbName = 'ai_db'
new MongoBot(url,dbName,(db)=>{
    const {boardDao} = dao.init(db)
    const moves = new Array(9).fill(null)
    boardDao.insertOne(moves)
    //db.board_history.insertOne(moves)
})

// start server
app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})

