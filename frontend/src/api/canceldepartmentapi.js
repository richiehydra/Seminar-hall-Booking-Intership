import axios from 'axios';
import data from "./constantsURL"
export const cancelDepartmentApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: `${data}/api/department/delete_department_request`,
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