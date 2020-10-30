const BoardDao = require('./boardDao')
module.exports={
    init: (db) => {
        const boardDao = new BoardDao(db)
        return {
            boardDao
        }
    }
}