import React from "react";

const Alert = (props) => {
const mesClassesCss = `alert ${props.typeAlert}`
return <div class={mesClassesCss} role="alert">
        {props.children}
      </div>
}
export default Alert;
