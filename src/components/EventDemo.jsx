import { useState } from "react";

const EventDemo = () => {
    const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.";

    const [text, setText] = useState("Hello, World!");
    const handleClick = () => {
        setText("You clicked me!");
    }

    const [text2, setText2] = useState(str);
    const handleCopy = () => {
        setText2("You copied the text!");
    }

    const [text3, setText3] = useState(str);
    const handleMouseOver = () => {
        document.getElementById('text3').style.backgroundColor = 'yellow';
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={handleClick}>
                Click me
            </button>
            <div>
                <p onCopy={handleCopy}>
                    {text2}
                </p>
            </div>
            <div>
                <p id="text3" onMouseMove={handleMouseOver}>
                    {text3}
                </p>
            </div>

        </div>
    )
}
export default EventDemo;