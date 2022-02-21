// console.log("hello check")

// const knex = require('knex')({
//     client: 'pg',
//     version: '7.2',
//     connection: {
//       host : '127.0.0.1',
//       port : 3306,
//       user : 'your_database_user',
//       password : 'your_database_password',
//       database : 'myapp_test'
//     }
//   });

 const knex = require('knex')

 const db = knex({
     client: 'pg',
     version: '7.2',
     connection: {
         host : '127.0.0.1',
         port : 5432,
         user : 'postgres',
         password : 'Natalie613',
         database : 'dvdrental'
     }
 });
// select option 1
//  db.select('country_id', 'country').from('country')

// seect option 2
db('country')
// inserting:
// .insert([
//     {
//         country : 'LaLaLand'
//     }
// ])
// .returning('*')

// // Deleteing:
// .where({country_id: 110})
// .del()
// .returning('*')

// selecting:
// .select('country_id', 'country')
// .where({country_id:40})

// updating:
// .update ({country: 'Greenand1'})
// .returning('*')
.then(data => {
    console.log(data);
}) 
.catch (err => {
    console.log(err);
})
