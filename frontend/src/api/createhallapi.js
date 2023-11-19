import axios from 'axios';
import data from "./constantsURL"
export const createHallApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: `${data}/api/hall/create_hall`,
        headers: {
          'content-type': 'application/json',
        },
        withCredentials: true,
        data:inputData
    };


    let response = await axios(options);
    return response


  } catch (error) {
    console.error(error.response.data); 
  }
};