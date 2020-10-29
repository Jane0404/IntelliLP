const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoBot = require('./dao/mongoBot')
const {startMongoDB} = require('./utilities/utilities')

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

async function start(){
    daos = await startMongoDB()
    app.put('/save_board',(req, res) => {
        const body = req.body
        res.send('/save_board/received')
    })
}

start()
// start server
app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})

