import axios from "axios";
const baseUrl = "https://hot-springs-api.herokuapp.com/all"

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const convertToGeoJSON = (data) => {
  const geoJSON = {
    type: "FeatureCollection",
    features: [],
  };
  data.forEach((hotspring) => {
    const feature = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [hotspring.long, hotspring.lat],
      },
      properties: {
        _id: hotspring._id,
        name: hotspring.name,
        address: hotspring.address,
        country: hotspring.country,
        state: hotspring.state,
        city: hotspring.city,
        lat: hotspring.lat,
        long: hotspring.long,
        temperatureMin: hotspring.temperatureMin,
        temperatureMax: hotspring.temperatureMax,
        type: hotspring.type,
        public: hotspring.public,
        hotel: hotspring.hotel,
        description: hotspring.description,
        setting: hotspring.setting,
      },
    };
    geoJSON.features.push(feature);
  });
  return geoJSON;
};

const serviceFunctions = { getAll, convertToGeoJSON }

export default serviceFunctions;
