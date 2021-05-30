import axios from "axios";
const url = "https://wttapp.herokuapp.com";
export const UserApi = async (username) => {
  const data = { user: username };
  try {
    const response = await axios.post(`${url}/user`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const SearchApi = async (query) => {
  const data = { query: query };
  try {
    const response = await axios.post(`${url}/search`, data);
    return response;
  } catch (error) {
    return error;
  }
};
