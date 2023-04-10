import { useState } from "react";
import SingleSpring from "./singleSpring";

const ResultsContainer = ({ data }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedSpring, setSelectedSpring] = useState(null);

  const handleClick = (item) => {
    setDisplayModal(!displayModal);
    setSelectedSpring(item);
    console.log(selectedSpring);
  }
  return (
    <>
      <h2 className="text-lg font-bold mb-4 text-center">
        {data.length} results found
      </h2>
      {data.map(spring =>
        <SingleSpring 
          key={spring._id}
          spring={spring}
          onClick={() => handleClick(spring)}
          openModal={displayModal}
          selected={selectedSpring}
        />
      )}
    </>
  )
}

export default ResultsContainer;
