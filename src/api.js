import axios from 'axios'

const API = axios.create({
  baseURL: 'https://api.spacexdata.com/v4/'
})
export function getRockets () {
  return API
    .get('rockets', {})
    .then(res => res.data)
}
