import SingleSpring from "./singleSpring";

const ResultsContainer = ({ data }) => {
  return (
    <>
      <h2 className="text-lg font-bold mb-4 text-center">
        {data.length} results found
      </h2>
      {data.map(spring => 
        <SingleSpring 
          key={spring._id}
          spring={spring}
        />
      )}
    </>
  )
}

export default ResultsContainer;
