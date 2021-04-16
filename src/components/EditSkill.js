import React, {useState} from  'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.scss';
import './homepage.css';

function EditSkill(props){
    let [checked, handleChecked] = useState(0);
    let [isChecked, setCheck] = useState(false);
    let setChecker = () =>{
        setCheck(!isChecked);
        handleCheckedBox()
    }
    let handleCheckedBox = () => {
        handleChecked(checked+1)
    }


    let percentage = Math.round(((checked/5) * 100), 1);
    return(
        <div>
            <h2 className="heading"><span class="fas fa-bahai awsome"></span>Edit {props.history.location.state.name}</h2>
            <div className="progressbar" style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            </div>
            <div className="container box columns">
                <div className="column">
                    <ol className="list">
                        <li><input type="text" className="input  is-success is-normal is-rounded" /> <input className="checkbox" type="checkbox" onChange={setChecker} /></li>
                        <li><input type="text" className="input  is-success is-normal is-rounded" /> <input className="checkbox" type="checkbox" onChange={setChecker}/></li>
                        <li><input type="text" className="input  is-success is-normal is-rounded" /> <input className="checkbox" type="checkbox" onChange={setChecker}/></li>
                        <li><input type="text" className="input  is-success is-normal is-rounded" /> <input className="checkbox" type="checkbox" onChange={setChecker}/></li>
                        <li><input type="text" className="input  is-success is-normal is-rounded" /> <input className="checkbox" type="checkbox" onChange={setChecker}/></li>
                        
                    </ol>
                </div>
                <div className="column">
                        <h1>Describe your skill</h1>
                        <div class="control">
                            <textarea class="textarea is-focused" placeholder="Skill Description"></textarea>
                        </div>
                        <button class="button is-success" >Save</button>
                </div>

               
            
            </div>
        </div>
    )
}

export default EditSkill;