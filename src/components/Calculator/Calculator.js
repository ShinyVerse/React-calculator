import React from 'react';
import Button from '../Button/Button';


const Calculator = (props) => {
  return (
      <div>
        <Button actionEvent={ props.printValue } value="1" innerHtml="1"/>
        <Button actionEvent={ props.printValue } value="2" innerHtml="2"/>
        <Button actionEvent={ props.printValue } value="3" innerHtml="3"/>
      </div>
  )
}



export default Calculator;
