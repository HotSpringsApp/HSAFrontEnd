import MapContainer from "./mapContainer";
import ResultsContainer from "./resultsContainer";
import AboutUsModal from './aboutModal';
import SpringModal from './springModal';

const MainContainer = (props) => {
  console.log(props);
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
      <AboutUsModal open={props.modal} />
      <SpringModal element={props.selectedElement} />
    </>
  )
}

export default MainContainer;
