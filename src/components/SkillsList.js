import React, {Component, Fragment} from 'react';
import { useHistory } from 'react-router';

class SkillsList extends Component{
    
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            isEdit : false
        }
    }
    
    renderSkill = () =>{
        
        return(
        <li className="skillname">
            <span>{this.props.x.name}</span>
            <button className="btn editbtn" onClick={() => {this.goToManage()}}>Manage</button>
            <button className="btn editbtn" onClick={() => {this.toggleState()}}>Edit</button>
            <button className="btn deletebtn" onClick={() => {this.props.del(this.props.index)}}>Delete</button>
         </li>
        )
    }
    
    //toggle 
    toggleState = () =>{
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }
    goToManage = () => {
        console.log("Name", this.props.x.name)
        this.props.handleManage(this.props.x.name);
    }
    updateSkillItem = (e) =>{
        e.preventDefault();
        this.props.editt(this.props.index, this.input.value);
        this.toggleState();
    }
    //updateForm
    renderUpdateFrom = () =>{
        return(
            <form onSubmit={this.updateSkillItem} className="updateForm">
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.x.name} className="inputUpdate" />
                <button className="btn updatebtn">Update</button>
            </form>
        )
    }
    render(){
        let {isEdit} = this.state
        return (
            <Fragment> 
                
                {isEdit ? this.renderUpdateFrom() : this.renderSkill()}
            </Fragment>
          );
    }
  
}


export default SkillsList
