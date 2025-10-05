import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import FunctionalButton from "./FunctionButton";

const ButtonPanel = ({functionalActionHandler, numberActionHandler, operatorActionHandler}) => {
    const numbers = [1,2,3,4,5,6,7,8,9,0,'.'];
    const operators = ["+","-","*","/"];
    const functional = ["C"];
    return (
        <>
            <div className="button-panel">
                {numbers.map(num => <NumberButton key={num} text={num} numberActionHandler={numberActionHandler}/>
                )}
                {operators.map(operator => <OperatorButton key={operator} text={operator} operatorActionHandler={operatorActionHandler} />
                )}
                {functional.map(funct => <FunctionalButton key={funct} text={funct} functionalActionHandler={functionalActionHandler}/>
                )}
            </div>
            <FunctionalButton key='=' text='=' functionalActionHandler={functionalActionHandler}/>
        </>
    )
};

export default ButtonPanel;