const { ObjectID } = require('mongodb');



module.exports = (makeDb) => {
    return Object.freeze({
        create, 
        exists,
        remove,
        get,
        changeName,
        changePrice,
        changeDescription,
        changeGoals
    })



    //create a new skill
    async function create(skill){
        const collection = await getConnection()

        const inserted = await collection.insertOne(skill)

        return !!inserted
    }

    //find a skill
    async function exists(name){
        const collection = await getConnection()

        const found = await collection.findOne({name})

        return !!found;
    }

    async function get(skillId){
        
        const collection = await getConnection()

        const found = await collection.find({_id: ObjectID(skillId)});

        return found;
    }



    //update a skill name
    async function changeName(skillId, name){

        const collection = await getConnection();

        const updated = await collection.updateOne({_id: ObjectID(skillId)}, {$set: {name: name}})

        return !!updated
    }
     
    
    //update a skill description
    async function changeDescription(skillId, description){

        const collection = await getConnection();

        const updated = await collection.updateOne({_id: ObjectID(skillId)}, {$set: {description: description}})

        return !!updated
    }

    //update a skill goal
    async function changeGoals(skillId, goals){

        const collection = await getConnection();

        const updated = await collection.updateOne({_id: ObjectID(skillId)}, {$set: {goals: goals}})

        return !!updated

    }

    //delete a skill
    async function remove(skill_id){
        const collection = await getConnection()

        const removed = await collection.deleteOne({_id: ObjectID(skill_id)})

        return !!removed;
    }
    

    //db function receive

    async function getConnection(){
        const db = await makeDb();
        const collection = db.collection('product')

        return collection
    }

}


