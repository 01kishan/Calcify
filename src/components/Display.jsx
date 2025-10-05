const Display = ({displayText}) => {
    return (
        <div className="display">
            <input type="text" value={displayText} className="display-screen" disabled />
        </div>
    )
};

export default Display;