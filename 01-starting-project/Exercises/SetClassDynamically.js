import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [ isSelected, setSelected ] = React.useState();
    function changeState (){
        setSelected(true);
    }
    return (
        <div>
            <p className = {isSelected ? 'active' : undefined}>Style me!</p>
            <button onClick={changeState} >Toggle style</button>
        </div>
    );
}
