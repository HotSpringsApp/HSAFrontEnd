import { useState } from 'react';
import sample_data from '../lib/sample_data.json';
import SingleSpring from "./singleSpring";
import MainContainer from './mainContainer';

const ResultsContainer = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  function handleClick(element) {
    setSelectedElement(element);
  }

  return (
    <>
      <h2 className="text-lg font-bold mb-4 text-center">
        {sample_data.length} results found
      </h2>
      {sample_data.map(spring => 
        <SingleSpring 
          key={spring._id}
          spring={spring}
          onClick={() => handleClick(spring)}
        />
      )}
      {selectedElement && <MainContainer selectedElement={selectedElement} />}
    </>
  )
}

export default ResultsContainer;
