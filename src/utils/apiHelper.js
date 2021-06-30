import axios from "axios";

function get(url, params) {
  return axios.get(url, {
    params: { ...params }
  }).then(result => result.data);
}

export default {
  get
}