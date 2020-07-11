import React, {Component} from "react";
import Button from '../../components/buttons/button'

class ModificationForm extends Component {

  state = {
    nomSaisi: this.props.nom,
    jobSaisi: this.props.job,
    levelSaisi: this.props.level,
    interetsSaisi: this.props.interets,
    skillsSaisi: this.props.skills
  }
  // componentDidMount = () => {
  //   this.setState({
  //     nomSaisi: this.props.nom,
  //     jobSaisi: this.props.job,
  //     levelSaisi: this.props.level,
  //     interetsSaisi: this.props.interets,
  //     skillsSaisi: this.props.skills
  //   })
  // }
  handleValidationModifications = () =>{
    this.props.validationModification(this.props.id, this.state.nomSaisi, this.state.jobSaisi, this.state.levelSaisi, this.state.interetsSaisi, this.state.skillsSaisi)
  }
  render(){
    return (
      <>
           <td><input type="text" 
                   value={this.state.nomSaisi} 
                   className="form-control" 
                   id="nom" 
                   onChange={(event)=> this.setState({nomSaisi: event.target.value})}
                   />
          </td>
          <td> 
            <input type="text" 
                   value={this.state.jobSaisi} 
                   className="form-control" 
                   id="job"
                   onChange={(event)=> this.setState({jobSaisi: event.target.value})}
                   />
          </td>
          <td>
            <select className="form-control" 
                   value={this.state.levelSaisi} 
                   id="level"
                   onChange={(event)=> this.setState({levelSaisi: event.target.value})}
                   >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
          </td>
          <td>
            <input type="text" 
                   value={this.state.interetsSaisi} 
                   className="form-control" 
                   id="interets" 
                   onChange={(event)=> this.setState({interetsSaisi: event.target.value})}
                   />
          </td>
          <td>
            <input type="text" 
                   value={this.state.skillsSaisi} 
                   className="form-control" 
                   id="skills" 
                   onChange={(event)=> this.setState({skillsSaisi: event.target.value})}
                   />
          </td>
          <Button
              btnColor="btn btn-success m-2"
              click={this.handleValidationModifications}
          >
            Valider
          </Button>
      </>
  )}
}
export default ModificationForm;
