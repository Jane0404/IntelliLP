const MongoClient = require('mongodb').MongoClient
const daos = require('./dao')
const {DB_NAME} = require('../../share/routes') 
const BoardDao = require('../dao/boardDao')

class MongoBot{
    constructor(){
        const url = 'mongodb://root:example@localhost:27017'
        this.client = new MongoClient(url,{useUnifiedTopology: true })
    }
    async init(){
        await this.client.connect()
        console.log("MongoDB server is connected.")
        this.db = this.client.db(DB_NAME)
        this.daos = daos.init(this.db)
        return this.daos
    }
}

module.exports = new MongoBot()