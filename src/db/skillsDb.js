const {ObjectID} = require('mongodb');


module.exports = (makeDb) =>{
	return Object.freeze({

	})
	    //create a new skill
    async function createSkill(skill){
        const collection = await getConnection()

        const inserted = await collection.insertOne(skill)

        return !!inserted
    }
        //find a skill
    async function skillExists(exists){
        const collection = await getConnection()

        const found = await collection.findOne({name})

        return !!found;
    }

    async function getSkill(skillID){
        
        const collection = await getConnection()

        const found = await collection.find({skill: skill_id}).toArray()

        return found;
    }
        //delete a skill
    async function removeSkill(skill_id){
        const collection = await getConnection()

        const removed = await collection.deleteOne({_id: ObjectID(skill_id)})

        return !!removed;
    }
        //db function receive

    async function getConnection(){
        const db = await makeDb();
        const collection = db.collection('skill');

        return collection;
    }
}