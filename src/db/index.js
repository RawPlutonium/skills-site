import {MongoClient} from 'mongodb';
const makeSkillsDb = require('./skillsDb');
const makeUserDb = require('./user');



async function makeDb(){

    const url = "mongodb://localhost:27017"
    const client = await MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log(client)
    const db = client.db('skillsapp')
    console.log("db", db)
    return db   
}

const skills = makeSkillsDb(makeDb);
const user = makeUserDb(makeDb);

module.exports = Object.freeze({skills, user})