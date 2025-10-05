const OperatorButton = ({text, operatorActionHandler}) => {
    return (
        <button className="operator-button" onClick={() => operatorActionHandler(text)  }>
            {text}
        </button>
    )
};

export default OperatorButton;