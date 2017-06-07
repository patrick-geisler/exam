import axios from "axios"

export const getReposByUsername = (username) => {

  return axios.get(`https://api.github.com/users/${username}/repos`)
    .then(response => {
      return response.data
    })
    .catch(() => {
      return Error
    })
};
