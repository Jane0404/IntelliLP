const mongoBot = require('../dao/mongoBot')

async function startMongoDB(){
    await mongoBot.init()
}

module.exports = {startMongoDB}