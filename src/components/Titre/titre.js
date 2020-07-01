import React from "react";

const Titre = (props) => {
    return (
      <>
           <h1 className="border border-dark p-2 m-2 bg-primary rounded text-center text-white">{props.children}</h1>
      </>
    )
}
export default Titre;
