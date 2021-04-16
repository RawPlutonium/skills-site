const MongoClient = require('mongodb').MongoClient;
const makeSkillsDb = require('./skillsDb');




async function makeDb(){
    const url = process.env.MONGODB_URL
    const client = await MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    const db = client.db('shoppap')

    return db   
}

const skills = makeSkillsDb(makeDb);

module.exports = Object.freeze({skills})