const axios = require('axios')
const myRobots = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

 module.exports = {
     myRobots
 }