import React from 'react';

const Button = (props) => {
  return (
      <button className="actionButton" value={props.value} onClick={props.actionEvent}>{props.innerHtml}</button>
  )
}

export default Button;
