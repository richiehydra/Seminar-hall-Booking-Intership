import axios from 'axios';
import data from "./constantsURL"
export const createDepartmentApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: `${data}/api/create_department`,
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