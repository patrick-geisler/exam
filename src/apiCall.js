import axios from "axios"

export const getReposByUsername = (username) => {

  return axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      return response.data
    })
    .catch(response => {
      console.log('err');
    })
};
