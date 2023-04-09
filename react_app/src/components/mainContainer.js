import { useState, useEffect } from 'react';
import MapContainer from './mapContainer';
import ResultsContainer from './resultsContainer';
import serviceFunctions from '../services/data';

const MainContainer = () => {
  const [springsData, setSpringData] = useState([]);

  useEffect(() => {
    serviceFunctions.getAll().then((springsArr) => {
      console.log(springsArr); // for testing purpose, remove later
      setSpringData(springsArr);
    });
  }, []);

  return (
    <>
      <div className="flex">
        <div className="w-3/5 bg-gray-200 p-6">
          <MapContainer data={springsData} />
        </div>
        <div className="w-2/5 bg-gray-300 p-6">
          <ResultsContainer data={springsData} />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
