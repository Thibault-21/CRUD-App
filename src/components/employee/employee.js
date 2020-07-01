import React from "react";
import Button from '../buttons/button'

const Employee = props => {
    return (
      <>
        <td>{props.nom}</td>
          <td>{props.job}</td>
          <td>{props.level}</td>
          <td>{props.interets}</td>
          <td>{props.skills}</td>
          <td><Button btnColor="btn btn-warning" click={props.modification}>Modifier</Button></td>
          <td><Button btnColor="btn btn-danger" click={props.supression}>Supprimer</Button></td>
      </>
  )
}
export default Employee;
