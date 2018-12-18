import React from 'react';

const Button = (props) => {
  return (
      <button className="myPlusButton" onClick={props.plusEvent}>+</button>
  )
}

export default Button;
