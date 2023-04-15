import { useState, useEffect } from 'react';
import MapContainer from './mapContainer';
import ResultsContainer from './resultsContainer';
import serviceFunctions from '../services/data';

const MainContainer = () => {
  const [springsData, setSpringData] = useState([]);
  const [boundedData, setBoundedData] = useState(springsData);

  useEffect(() => {
    serviceFunctions.getAll().then((springsArr) => {
      setSpringData(springsArr);
    });
  }, []);

  return (
    <>
      <div className="flex">
        <div className="w-3/5 bg-gray-200 p-6">
          <MapContainer data={springsData} boundedData={boundedData} setBoundedData={setBoundedData} />
        </div>
        <div className="w-2/5 bg-gray-300 p-6">
          <ResultsContainer data={boundedData} />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
