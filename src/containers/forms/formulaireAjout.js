import React, {Component} from "react";
import Button from '../../components/buttons/button'
import {withFormik} from 'formik'
import * as Yup from "yup";

class FormAjout extends Component {

  // state = {
  //   nomSaisi:"",
  //   jobSaisi:"",
  //   levelSaisi:"",
  //   interetsSaisi:"",
  //   skillsSaisi:"",
  // }
  // handleValidationForm = (event) => {
  //   event.preventDefault();
  //   this.props.validation(this.state.nomSaisi, this.state.jobSaisi, this.state.levelSaisi, this.state.interetsSaisi, this.state.skillsSaisi)
  //   this.setState({
  //     nomSaisi:"",
  //     jobSaisi:"",
  //     levelSaisi:"",
  //     interetsSaisi:"",
  //     skillsSaisi:""
  //   })
  // }
  render(){
    return (
         <form>
          <div className="form-group m-2 ">
            <label htmlFor="nom">Nom</label>
            <input type="text" 
                   value={this.props.values.nom} 
                   name="nom"
                   className="form-control" 
                   id="nom" 
                   onChange={this.props.handleChange}
                   onBlur={this.props.handleBlur}
                   />
                   {this.props.errors.nom && <span style={{color: "red"}}>{this.props.errors.nom}</span>}
          </div>
          <div className="form-group m-2">
            <label htmlFor="job">Job</label>
            <input type="text" 
                   value={this.props.values.job} 
                   name="job"
                   className="form-control" 
                   id="job"
                   onChange={this.props.handleChange}
                   onBlur={this.props.handleBlur}
                   />
                   {this.props.errors.job && <span style={{color: "red"}}>{this.props.errors.job}</span>}
          </div>
          <div className="form-group m-2">
            <label htmlFor="level">Level - / +</label>
            <select className="form-control" 
                   value={this.props.values.level} 
                   name="level"
                   id="level"
                   onChange={this.props.handleChange}
                   onBlur={this.props.handleBlur}
                   >
                   
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            {this.props.errors.level && <span style={{color: "red"}}>{this.props.errors.level}</span>}
          </div>
          <div className="form-group m-2">
            <label htmlFor="interets">Intérêts</label>
            <input type="text" 
                   value={this.props.values.interets}
                   name="interets" 
                   className="form-control" 
                   id="interets" 
                   onChange={this.props.handleChange}
                   />
          </div>
          <div className="form-group m-2">
            <label htmlFor="skills">skills</label>
            <input type="text" 
                   value={this.props.values.skills}
                   name="skills" 
                   className="form-control" 
                   id="skills" 
                   onChange={this.props.handleChange}
                   />
          </div>
          <Button
              btnColor="btn btn-success m-2"
              click={this.props.handleSubmit}
          >
            Valider
          </Button>
        </form>  
  )}
}
export default withFormik({
  mapPropsToValues : () => ({
    nom:'',
    job:'',
    level:'',
    interets:'',
    skills:'',
  }), 
  validationSchema: Yup.object().shape({
    nom : Yup.string()
              .min(3, 'Le nom doit avoir au moins 3 caractères')
              .max(15, 'Le nom ne doit pas excédé 15 caractères')
              .required('le nom est un champ obligatoire'),
    job: Yup.string()
              .min(2, 'Le job doit comporté au moins 2 caractères')
              .max(20, 'Le job ne peut contenir plus de 20 caractères')
              .required("le job est un champ obligatoire"),
    level: Yup.number()
                .min(1, 'Le level doit être au minimum de 1')
                .max(5, 'Le level doit être au maximum de 5')
                .required('le level est un champ obligatoire')
                // if I want to match special characters :
                // You can use Yup.matches(/* regex here */, /* error message */)
  }), 
  // validate: values => {
  //   const errors = {};
  //   if(values.nom.length < 3){
  //     errors.nom = "Le nom doit avoir au moins 3 caractères";
  //   } 
  //   if(values.nom.length > 15){
  //     errors.nom = "Le nom ne doit pas excédé 15 caractères"
  //   }
  //   if(values.job.length < 2){
  //     errors.job = "Le job est obligatoire"
  //   }
  //   if(values.level < 1 || values.level > 5){
  //     errors.level = "remplissez le bon level"
  //   }
  //   return errors;
  // }, 
  handleSubmit: (values, {props}) => {
    props.validation(values.nom, values.job, values.level, values.interets, values.skills)
  }
})(FormAjout);
