import axios from 'axios';
const baseUrl = 'https://hot-springs-api.herokuapp.com/all';

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    const data = await response.data;
    return data;
  } catch (e) {
    console.error('Could not retrieve data from API --->', e);
  }
};

const serviceFunctions = getAll;

export default serviceFunctions;
