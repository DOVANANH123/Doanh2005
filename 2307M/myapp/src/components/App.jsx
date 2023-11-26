import React, {useState} from "react";

function App (){
    const [headingText, setHeadingText] = useState ("Hello");
    const[isMouseOver, setMouseOver] = useState (false);

    function handleClick(){
        setHeadingText("Submitted");
    }
    function handleMouseOver (){
        setMouseOver(true);
    }
    function handleMouseOut (){
        setMouseOver (false);
    }

    return(
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="Enter your name?"/>
            <button
            style={{backgroundColor: isMouseOver ? "red": "blue"}}
            onMouseOver= {handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}>Submit</button>
        </div>
    );
}
export default App;