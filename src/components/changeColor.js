import React from "react";
import "./changeColor.css"

//Text that changes color infinitely
const ChangeTextColor = ({ text }) => {
    return(
        <div className="change-color-text">
        {[...text].map((char, index) => (
            <span key={index}>{char}</span>
        ))}
    </div>
    );
};

export default ChangeTextColor;