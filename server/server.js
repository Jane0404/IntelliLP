const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoBot = require('./dao/mongoBot')

const app = express()
const port = 3000
const indexFile = path.join(__dirname, '../build/index.html')
const PUBLIC_DIR = path.join(__dirname, '../build')

start().catch((err)=>{
    console.log(err)
})

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})

async function start(){
    app.use(morgan('dev'))
    app.use(express.static(PUBLIC_DIR))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.get('/*', (req, res) => {
        res.sendFile(indexFile)
    })

    const {boardDao} = await mongoBot.init()

    app.put('/save_board',(req, res) => {
        const body = req.body
        console.log('body:',body)
        boardDao.insertOne(body)
        res.send('/save_board/received')
    })
}
