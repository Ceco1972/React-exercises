import { useState } from 'react';

// don't change the Component name "App"
export default function App() {
    const styleObjWhite = { color: 'white'};
    const styleObRed = { color: 'red'};

    const [highlighted, setHighlight] = useState(false);

    function setHighlighted(){
        setHighlight(isHighlighted=>!isHighlighted);
    }
    return (
        <div>
            <p  style={!highlighted? styleObjWhite : styleObRed}>Style me!</p>
            <button onClick={setHighlighted}>Toggle style</button>
        </div>
    );
}
