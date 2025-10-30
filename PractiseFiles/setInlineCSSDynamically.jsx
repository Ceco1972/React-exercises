import { useState } from 'react';

const INITCOLOR = {
    color: "white"
}
const GREENCOLOR = {
    color: "green"
}
const REDCOLOR = {
    color: "red"
}


function App() {
   const [colorH1, setColor] = useState(INITCOLOR);
    
    function handleColor(colorH1){
        setColor(colorH1);
    }
    
    return (
    <div id="app">
      <h1 style={colorH1}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => handleColor(GREENCOLOR)}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleColor(REDCOLOR)}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
