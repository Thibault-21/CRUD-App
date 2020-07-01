import React from 'react'

const Button = props => {

  const btnCss = `btn ${props.btnColor}`;
  return (
    <>
      <button type="button"
              className={btnCss}
              onClick={props.click}>
              {props.children}
      </button>
    </>
  )
}
export default Button;
