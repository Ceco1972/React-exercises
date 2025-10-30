import { useState } from 'react';

import Toast from './Toast';

function App() {
  const [showToast, setShowToast] = useState(false);
  
  function handleEnrol() {
    // Todo: Show toast
    setShowToast(true);
    setTimeout(() => {
      // Todo: hide toast
      setShowToast(false)
    }, 3000);
  }
  return (
    <div id="app">
      
      {showToast && <Toast message ='You have successfully enrolled in the course!'/>}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
