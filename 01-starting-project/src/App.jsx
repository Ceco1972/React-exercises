// import componentsImg from "./assets/components.png";
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Header from './components/Header/Header.jsx';
import Todo from './components/Todo.jsx';
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

function App() {
  
  

// let tabContent = <p>Please select a topic.</p>;
            
//             if (selectedTopic) {
//               tabContent = (
//               <div id="tab-content">
//             <h3>{EXAMPLES[selectedTopic].title}</h3>
//             <p>{EXAMPLES[selectedTopic].description}</p>
//             <pre>
//               <code>
//                 {EXAMPLES[selectedTopic].code}

//               </code>
//             </pre>
          
//           </div> 
//            ); } 

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        
         <ul id='li2'>
          {DUMMY_TODOS.map(todo => <Todo key='text' text={todo} />)}
        </ul>

      </main>
    </>
  );
}

export default App;
