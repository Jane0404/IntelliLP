const {BOARD_HISTORY} = require('../../share/routes')

class BoardDao {
    constructor(db){
        this.collection = db.collection(BOARD_HISTORY)
    }
    async insertOne(moves){
        const record = await this.collection.insertOne({moves})
        return record
    }
}

module.exports = BoardDao