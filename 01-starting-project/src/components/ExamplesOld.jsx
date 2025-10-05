import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';  
import Section from './Section.jsx';

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();
    function onClickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <Section  id="examples">
          <h2>Examples</h2>
          <menu>
            {/* setting a value for a function as a prop on a custom component */}
            <TabButton isSelected={selectedTopic === 'components' } onClick={() => onClickHandler('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx' } onClick={() => onClickHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'state' } onClick={() => onClickHandler('state')}>State</TabButton>
            <TabButton isSelected={selectedTopic === 'props' } onClick={() => onClickHandler('props')}>Props</TabButton>

          </menu>
          {!selectedTopic ? ( <p>Please select a topic</p> ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}

              </code>
            </pre>
          
          </div> )}

            {/* SECOND APPROACH */}
            {/* let tabContent = <p>Please select a topic.</p>;
            
            if (selectedTopic) {
              tabContent = (
              <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}

              </code>
            </pre>
          
          </div> 
           ); } 

          {tabContent} */}

            {/* ANOTHER APPROACH TO THE ABOVE - although I do not see it working...:
          {!selectedTopic && <p>Please select a topic.</p> } 
          {!selectedTopic && 
          (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}

              </code>
            </pre>
          
          </div> )} */}

          {/* {tabContent} */}
          
          {/* {selectedTopic} */}
          {/* using attributes */}
          {/* <menu>
            <TabButton label="Components" />
          </menu> */}
        </Section>); }