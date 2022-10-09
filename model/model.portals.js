
const db = require("../utilities/db"); 
var md5 = require('md5'); 



const portal = {

    validate_user: async function(data){
        
        const query = "SELECT * FROM enrollusertbl WHERE userName = ? AND userpasswd = ?";
		const value = [data.user, md5(data.pass)]; 
		const res = db.mysql(query, value)
			.then(function(res){
				if(res.length){
                    return res[0]; 
                }
                else{
                    return false; 
                }
			})
			.catch(function(error){
				return false; 
			})
		return res;
    }

}


/* export all the object inside data const
*/
module.exports = portal; 