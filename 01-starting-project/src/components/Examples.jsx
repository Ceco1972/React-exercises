import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from '../data.js';  
import Section from './Section.jsx';


export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();
    function onClickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
    }
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
        </div> 
      ); 
  }

  return (
    <Section  id="examples">
         <Tabs 
            buttons= {
                <>
            <TabButton isSelected={selectedTopic === 'components' } onClick={() => onClickHandler('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx' } onClick={() => onClickHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'state' } onClick={() => onClickHandler('state')}>State</TabButton>
            <TabButton isSelected={selectedTopic === 'props' } onClick={() => onClickHandler('props')}>Props</TabButton>
                </> }
           >
          {tabContent}              
          </Tabs> 
            
        </Section>); }