import React from "react";

function ColorBlock({color, i}) {
    return (
        <div className="colorBlock" style={{backgroundColor: color}} key={i}>
            <p>{color}</p>
        </div>
    );
}

export default ColorBlock;
