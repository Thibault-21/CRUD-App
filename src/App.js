import React, {Component} from "react";
import Titre from '../src/components/Titre/titre'
import Employees from './containers/employees/employees'
import Button from './components/buttons/button'

class App extends Component {
  state = {
    ajoutEmployee : false
  } 
  ajoutEmployee = () => {
    this.setState(oldState => {
      return {ajoutEmployee: !oldState.ajoutEmployee}
  })
}
  render(){
    return (
      <>
        <Titre>Liste des employés</Titre>
        <Employees 
          ajoutEmployee={this.state.ajoutEmployee}
          fermertureAjoutEmployee={()=> this.setState({ajoutEmployee: false})}
        />
        <Button btnColor="btn btn-primary w-100 m-2"
                click={this.ajoutEmployee}>
          {!this.state.ajoutEmployee ? "Ajouter un employé" : "Fermer le formulaire"}
        </Button>
      </>
  )}
}
export default App;
