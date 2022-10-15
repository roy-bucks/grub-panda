
const db = require("../utilities/db"); 
var md5 = require('md5'); 



const portal = {

	checkEmail: async (email, pass) =>{
		const query = "SELECT * FROM users WHERE email =? AND password = ?"; 
		const value = [email, md5(pass)]; 
		const res = db.mysql(query, value)
			.then((res)=>{
				if(res.length) {
					return true;
				}
				else{
					return false;
				}
			})
			.catch((err)=>{
				console.log(err)
				return false;
			})
		return res;
	}, 
	saveNewUser: async  (data) =>{

		console.log(data);
		const query = " INSERT INTO users (firstname, lastname, email, password,userType, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)";
		const value =  [data.fname, data.lname, data.email,  md5(data.pass), data.userType, new Date(), new Date()]; 
		const res = db.mysql(query, value)
			.then((res)=>{
				return true;
			})
			.catch((err)=>{
				console.log(err)
				return false;
			})
		return res;
	},

	checkUser: async (data) =>{
		const query = "SELECT * FROM users WHERE email =? AND password = ?"; 
		const value = [data.email, md5(data.pass)]; 
		const res = db.mysql(query, value)
			.then((res)=>{
				if(res.length) {
					return res;
				}
				else{
					return false;
				}
			})
			.catch((err)=>{
				console.log(err)
				return false;
			})
		return res;
	}


}


/* export all the object inside data const
*/
module.exports = portal; 