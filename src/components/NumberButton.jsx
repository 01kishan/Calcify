const NumberButton = ({text, numberActionHandler}) => {
    return (
        <button className="number-button" onClick={() => numberActionHandler(text)  }>
            {text}
        </button>
    )
};

export default NumberButton;