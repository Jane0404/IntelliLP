const {BOARD_HISTORY} = require('../../share/routes')

class BoardDao {
    constructor(db){
        this.collection = db.collection(BOARD_HISTORY)
    }
    async insertOne(moves){
        const record = await this.collection.insertOne({moves}).catch((err)=>{
            let tag = 'Errors From BoardDao:insertOne(moves):\n'
            console.log(tag)
        })
        return record
    }
}

module.exports = BoardDao