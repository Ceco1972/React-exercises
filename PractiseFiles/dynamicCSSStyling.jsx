import React from 'react';

function App() {
 const [choice, setColor] = React.useState(null);

 let cssClass;
 
 if (choice === 'yes'){
     cssClass = 'highlight-green';
 } else if (choice === 'no'){
     cssClass = 'highlight-red';
 } 
 
  return (
    <div id="app">
      <h1 className = {cssClass}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setColor('yes')}>Yes</button>
        </li>
        <li>
          <button onClick ={() => setColor('no')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
