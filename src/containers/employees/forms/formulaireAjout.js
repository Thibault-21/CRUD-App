import React, {Component} from "react";
import Button from '../../../components/buttons/button'

class FormAjout extends Component {

  state = {
    nomSaisi:"",
    jobSaisi:"",
    levelSaisi:"",
    interetsSaisi:"",
    skillsSaisi:"",
  }
  handleValidationForm = (event) => {
    event.preventDefault();
    this.props.validation(this.state.nomSaisi, this.state.jobSaisi, this.state.levelSaisi, this.state.interetsSaisi, this.state.skillsSaisi)
    this.setState({
      nomSaisi:"",
      jobSaisi:"",
      levelSaisi:"",
      interetsSaisi:"",
      skillsSaisi:""})
  }
  render(){
    return (
         <form>
          <div className="form-group m-2 ">
            <label htmlFor="nom">Nom</label>
            <input type="text" 
                   value={this.state.nomSaisi} 
                   className="form-control" 
                   id="nom" 
                   onChange={(event)=> this.setState({nomSaisi: event.target.value})}
                   />
          </div>
          <div className="form-group m-2">
            <label htmlFor="job">Job</label>
            <input type="text" 
                   value={this.state.jobSaisi} 
                   className="form-control" 
                   id="job"
                   onChange={(event)=> this.setState({jobSaisi: event.target.value})}
                   />
          </div>
          <div className="form-group m-2">
            <label htmlFor="level">Level - / +</label>
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
          </div>
          <div className="form-group m-2">
            <label htmlFor="interets">Intérêts</label>
            <input type="text" 
                   value={this.state.interetsSaisi} 
                   className="form-control" 
                   id="interets" 
                   onChange={(event)=> this.setState({interetsSaisi: event.target.value})}
                   />
          </div>
          <div className="form-group m-2">
            <label htmlFor="skills">skills</label>
            <input type="text" 
                   value={this.state.skillsSaisi} 
                   className="form-control" 
                   id="skills" 
                   onChange={(event)=> this.setState({skillsSaisi: event.target.value})}
                   />
          </div>
          <Button
              btnColor="btn btn-success m-2"
              click={this.handleValidationForm}
          >
            Valider
          </Button>
        </form>  
  )}
}
export default FormAjout;
