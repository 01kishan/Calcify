const FunctionalButton = ({text, functionalActionHandler}) => {

    let buttonClass = "";
    if( text === "=")
        buttonClass += "equal-button";
    else if( text === "C")
        buttonClass += "clear-button";   

    return (
        <button className={buttonClass} onClick={() => functionalActionHandler(text)  }>
            {text}
        </button>
    )
};

export default FunctionalButton;