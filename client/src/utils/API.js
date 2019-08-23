import axios from "axios";

export default {
  //todo
  createUser: function(userData) {
    return axios.post("api/users", userData);
  }
};
