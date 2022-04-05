import React, {useState} from "react";

function ColorForm({addColor}) {
    let [input, setInput] = useState("");
    // console.log("input", input);

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(input);
        let element = document.getElementById("search");
        element.value = "";
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    id="search"
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Submit!</button>
            </form>
        </div>
    );
}

export default ColorForm;
