const {BOARD_HISTORY} = require('../../share/routes')

class BoardDao {
    constructor(db){
        console.log(BOARD_HISTORY)
        this.db = db
        this.collection = db.collection(BOARD_HISTORY)
    }
    insertOne(moves){
        this.collection.insertOne({moves})
    }
}

module.exports = BoardDao