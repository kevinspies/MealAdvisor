import axios from "axios";

export default {
  //todo
  createUser: function(userData) {
    return axios.post("api/users", userData);
    //this jumps all the way back out to root directory
    //and i have to find where its making this call
    //where this http port is recieved
    // "saveBook (bookData)" (post) (api/books)
  }
};
