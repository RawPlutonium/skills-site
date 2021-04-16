import React from  'react';

function EditSkill(props){
    console.log(props)
    return(
        <div>
            <h2 className="heading"><span class="fas fa-bahai awsome"></span>Edit {props.name}</h2>
        </div>
    )
}

export default EditSkill;