const { ObjectID } = require("bson")

module.exports = (makeDb) => {
    return Object.freeze({
        create,
        exists,
        remove,
        fetchPerson
    })



//create new user
async function create(user){
    const collection = await getConnection()
    const inserted = await collection.insertOne(user)
    return !!inserted
}



async function exists(userId){

    const collection = await getConnection()

    const found = await collection.findOne({_id: ObjectID(userId)})

    return !!found
}

//return user with id
async function fetchPerson(username){

    const collection = await getConnection()

    const found = await collection.findOne({username: username})
    return found
}

//remove a user based on their id
async function remove(userId){
    const collection = await getConnection()

    const deleted = await collection.deleteOne({userId: ObjectID(userId)})

    return !!deleted
}

//get db connection
async function getConnection(){
    const db = await makeDb();
    const collection = db.collection('users');
    return collection
}   
}