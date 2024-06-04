import { useState } from "react";

import TabButton from "./TabButton.jsx";
import { EXAMPLES } from '../data.js';
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();
    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton)
        console.log(selectedButton);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs 
                buttons={<><TabButton label="Components" onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components' ? true : false}/>
                <TabButton label="JSX" onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx' ? true : false}/>
                <TabButton label="Props" onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props' ? true : false}/>
                <TabButton label="State" onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state' ? true : false}/></>}
            >
                {!selectedTopic ? (<p>Please select a topic.</p>) : (<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
                </pre>
            </div> ) }
          </Tabs>
          
        </Section>
    );
}