require('dotenv').config(); 

module.exports = {
	connectionLimit: parseInt(process.env.Limit),
  	host: process.env.Host,
  	user: process.env.User,
  	password: process.env.Password,
  	database: process.env.Database

}