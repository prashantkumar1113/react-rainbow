import "./App.css";
import React, {useState} from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";

function App() {
    let colorsArr = [
        "violet",
        "blue",
        "lightblue",
        "green",
        "greenyellow",
        "yellow",
        "orange",
        "red",
    ];

    let [colors, setColor] = useState(colorsArr);
    const addColor = (newColor) => {
        setColor([...colors, newColor]);
    };

    let colorMap = colors.map((color, i) => {
        return <ColorBlock color={color} key={i} />;
    });

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    );
}

export default App;
