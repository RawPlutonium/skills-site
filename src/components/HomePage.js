import React, {Component} from 'react' 
import Addskill from './Addskill'
import SkillsList from './SkillsList'
import './homepage.scss';

class HomePage extends Component {
  state={
    skills:[
    
    ],
    current: '',
 
  }

  //updateSkill (track the new typed skill)
  updateSkill = (e) =>{
    e.preventDefault();
    this.setState({
        current: e.target.value //input value
      })
  }

  //AddNewSkill
  addNewSkill = (e) => {
    e.preventDefault();
   let crr = this.state.current;
   let sk = this.state.skills;
   sk.push({name:crr})
   this.setState({
    skills: sk,
    current: ''
   })
  }

  //deleteCourse

  deleteSkill = (i) => {
    //console.log(i);
    let skls = this.state.skills;
    skls.splice(i, 1); //remove
    this.setState({
      skills: skls
    })
  }

  //editSkill
  editSkill = (i, newval) =>{
    let sklls = this.state.skills;
    let skl = sklls[i];
    skl['name']= newval;
    this.setState({
      skills: sklls
    })
  }

  handleManage = (name) => {
    console.log("Name 2",name)
    this.props.history.push({pathname: '/edit', state: {name: name}})
  }

  render(){
    const skillsList = this.state.skills.map((skill, i) => {
      return <SkillsList x={skill} key={i} index={i} del={this.deleteSkill} editt={this.editSkill} handleManage={this.handleManage} />
    })

    return (
      <div className="App">
        <h2 className="heading">Welcome Mnyambura! <br/>&nbsp;<span class="fas fa-bahai awsome"></span>Manage Your Skills&nbsp;<span class="fas fa-bahai awsome"></span></h2>
        <Addskill y={this.updateSkill} z={this.addNewSkill} cr={this.state.current}/>
        <div className="current">
      
        { this.state.skills.length === 0 ?
          
          <p className="currentp"> You have no current skills added. </p>
         : 
         <>
         <p className="currentp"> Your Current Skills: </p>
          <ul className="skillList"> <li> {skillsList} </li> </ul> 
          </>
          } 
        </div>

      </div>
    );
  }
}

export default HomePage;
