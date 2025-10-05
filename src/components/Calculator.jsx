import { useState } from 'react';
import '../styles/Calculator.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import {calculateRes} from '../utility/calcualtions';

const Calculator = () => {
    const [dispayText, setDispayText] = useState("0");

    const functionalActionHandler = (action) => {
        if(action === "C")
        {
            let tempdispayText = "0";
            setDispayText(tempdispayText);
        }
        else if(action === "=")
        {
          if(dispayText !== "0")
          {
            let calcVal = calculateRes(dispayText);
            setDispayText(calcVal);
          }
        }
       
    }

    const numberActionHandler = (number) => {
      let temp = "";
      if(dispayText === "0")
        temp =  number.toString();
      else
        temp =  dispayText.toString()+number.toString();

        setDispayText(temp);
    }

    const operatorActionHandler = (operator) => {
      if (dispayText !== "0") {
        let currentInput = dispayText.toString();
        const lastChar = currentInput.slice(-1); 
        let temp = "";

        if (["+", "-", "*", "/"].includes(lastChar)) {
          // Replace the last operator with the new one
          temp = currentInput.slice(0, -1) + operator;
        } else {
          // Append the operator normally
          temp = currentInput + operator;
        }

        setDispayText(temp);
      }
    };



  return (
    <>
      <div>
        <h1 className="header">Calcify</h1>
      </div>
      <div className="calc-container">  
          <Display displayText={dispayText} />
          <ButtonPanel 
              functionalActionHandler={functionalActionHandler} 
              numberActionHandler={numberActionHandler} 
              operatorActionHandler={operatorActionHandler} 
          />
      </div>
    </>
  )
};

export default Calculator;