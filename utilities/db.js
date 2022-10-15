//My SQL Configuration
const Mysql = require('mysql');
const dbconfig = require('../config/db');
const pool = Mysql.createPool(dbconfig);


/* This is the main MYSQL query 
*/


//fixed the pooling method
const db = {
    mysql: async function(query, values){
        return  result = new Promise(function(resolve, reject){
            pool.query(query, values,  function(error, result){
                if(!error){
                        resolve(result);
                }else{
                        console.log(error);
                        reject(false); 
                }
            });
        });
    },
}


module.exports = db; 