const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

class MongoBot{
    constructor(url, dbName, callback){
        console.log('constructor of mongobot')
        console.log(url,dbName)
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, client)=>{
            assert.equal(null, err)
            console.log("Connected sucessfully to the mongodb server")
            this.db = client.db(dbName)
            callback(this.db)
        })
    }
}

module.exports = MongoBot