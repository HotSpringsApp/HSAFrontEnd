import { useState } from "react";
import SingleSpring from "./singleSpring";

const ResultsContainer = ({ data }) => {
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => {
    setDisplayModal(!displayModal);
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
          onClick={handleClick}
          openModal={displayModal} 
        />
      )}
    </>
  )
}

export default ResultsContainer;
