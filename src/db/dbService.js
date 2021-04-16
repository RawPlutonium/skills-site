const {skills, user} = require('./index');



//define db functions
//create a skill
async function createSkill(name, description, goals){
    let createdSkill = await skills.create({name, description, goals})
    return createdSkill;
}

async function updateDescription(skillId, description){
    let skill = await skills.changeDescription(skillId, description);
    return skill
}
async function updateGoals(skillId, goals){
    let skill = await skills.changeGoals(skillId, goals);
    return skill
}
async function deleteSkill(skillId){
    let skill = await skills.remove(skillId);
    return skill
}
async function createUser(username, password){
    let createdUser = await user.create(username, password)
    return createdUser;
}

async function fetchUser(username){
    let fetchedUser = await user.fetchPerson(username)
    return fetchedUser
}

module.exports = {
    createSkill, 
    updateDescription,
    updateGoals,
    deleteSkill,
    createUser,
    fetchUser
}