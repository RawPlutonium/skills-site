const { MongoClient } = require("mongodb");
const makeSkillsDb = require("/.skillsDb");


async function makeDb(){
    const url = process.env.MONGODB_URL
    const client = await MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    const db = client.db('skills_app')

    return db
}

const skills = makeSkillsDb(makeDb);


module.exports = Object.freeze({
skills
})