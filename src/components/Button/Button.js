import React from 'react';

const Button = (props) => {
  return (
      <button className="actionButton" onClick={props.actionEvent}>{props.innerHtml}</button>
  )
}

export default Button;
