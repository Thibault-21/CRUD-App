import React, {Component} from "react";
import Employee from '../../components/employee/employee'
import FormAjout from "../forms/formulaireAjout";
import ModificationForm from '../forms/modificationForm'

class component extends Component {

  state = {
    employees: [
      {id: 1, nom: "Kea", job: "Ux Designer", level: 2, interets: "Gastronomie", skills: "ux research, marketing" },
      {id: 2, nom: "Thibault", job: "developer", level: 1, interets: "education", skills: "react.js" },
    ], 
    lastIdEmployee: 2,
    idEmployeeAModifier: 0
  }
  handleAjoutEmployee = (nom, job, level, interets, skills) => {
    const newEmployeeListe = [...this.state.employees];

    const newEmployee = {nom, job, level, interets, skills, id: this.state.lastIdEmployee + 1};

    newEmployeeListe.push(newEmployee);

    this.setState(oldState => {
      return ({
        employees: newEmployeeListe, 
        lastIdEmployee: oldState.lastIdEmployee + 1
      })
    })
    this.props.fermertureAjoutEmployee();
  }
  handleSupressionEmployee = (id) => {
    const findTheEmployeeToDelete = this.state.employees.findIndex(employee=> {
      return employee.id === id;
    })

    const duplicateTheEmployeeLIst = [...this.state.employees]

    duplicateTheEmployeeLIst.splice(findTheEmployeeToDelete, 1);
    
    this.setState({employees: duplicateTheEmployeeLIst})
  }
  handleModificationEmployee = (id, nom, job, level, interets, skills) => {
    const findTheModicateEmployee = this.state.employees.findIndex(employee => {
      return employee.id === id;
    })
    const newEmployee = {id, nom, job, level, interets, skills};

    const duplicateEmployeeList = [...this.state.employees]

    duplicateEmployeeList[findTheModicateEmployee] = newEmployee;

    this.setState({
      employee: duplicateEmployeeList,
      idEmployeeAModifier: 0
    })
  }
  render(){
    return (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Job</th>
                <th>Level</th>
                <th>interets</th>
                <th>Skills</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
             <tbody>
             
              {this.state.employees.map((employee) => {
                if(employee.id !== this.state.idEmployeeAModifier){
                  return (
                    <tr key={employee.id}>
                      <Employee 
                        {...employee}
                        supression={() => this.handleSupressionEmployee(employee.id)}
                        modification={() => this.setState({idEmployeeAModifier: employee.id})}
                       />
                    </tr>
                  );
                }
                else {
                  return (
                    <tr key={employee.id}>
                      <ModificationForm 
                        id={employee.id}
                        nom={employee.nom}
                        job={employee.job}
                        level={employee.level}
                        interets={employee.interets}
                        skills={employee.skills} 
                        validationModification={this.handleModificationEmployee}
                      />
                    </tr>
                  )
                }
              })
             }
            </tbody> 
          </table>
          {this.props.ajoutEmployee && <FormAjout validation={this.handleAjoutEmployee}/>}
      </>
  )}             
}
export default component;
