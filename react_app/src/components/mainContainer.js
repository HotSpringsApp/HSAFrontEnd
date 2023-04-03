import MapContainer from "./mapContainer";
import ResultsContainer from "./resultsContainer";

const MainContainer = () => {
  return (
    <>
      <div className="flex">
        <div className="w-3/5 bg-gray-200 p-6">
          <MapContainer />
        </div>
        <div className="w-2/5 bg-gray-300 p-6">
          <ResultsContainer />
        </div>
      </div>
    </>
  )
}

export default MainContainer;
