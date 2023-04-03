import sample_data from '../lib/sample_data.json';
import SingleSpring from "./singleSpring";

const ResultsContainer = () => {
  return (
    <>
      <h2 className="text-lg font-bold mb-4 text-center">
        {sample_data.length} results found
      </h2>
      {sample_data.map(spring => 
        <SingleSpring 
          key={spring._id}
          spring={spring}
        />
      )}
    </>
  )
}

export default ResultsContainer;
