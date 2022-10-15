
const db = require("../utilities/db"); 
var md5 = require('md5'); 



const portal = {

	saveMerchantUser: async  (data)=>{
		const query = " INSERT INTO merchants (name, email, password, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)";
		const value =  [data.merchant, data.email, md5(data.pass), new Date(), new Date()]; 
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
	saveRiderUser: async  (data)=>{
		console.log(data);
		const query = " INSERT INTO riders (firstname, lastname, email, password, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)";
		const value =  [data.fname, data.lname, data.email,  md5(data.pass), new Date(), new Date()]; 
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
	saveCustomerUser: async  (data)=>{
		console.log(data);
		const query = " INSERT INTO customers (firstname, lastname, email, password, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)";
		const value =  [data.fname, data.lname, data.email,  md5(data.pass), new Date(), new Date()]; 
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

}


/* export all the object inside data const
*/
module.exports = portal; 