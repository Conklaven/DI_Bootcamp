// const products = [
//     {id: 1, name: 'Iphone', price: 1500},
//     {id: 2, name: 'Ipad', price: 3000},
//     {id: 3, name: 'andriod', price: 1000},
//     {id: 4, name: 'samsung', price: 2000},

// ];

// module.exports = {products};


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