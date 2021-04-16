const {skills} = require('./index');




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

module.exports = {
    createSkill, 
    updateDescription,
    updateGoals,
    deleteSkill
}