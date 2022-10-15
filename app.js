const express = require('express'); 
const route = require('./routes'); 
const bodyParser = require('body-parser'); 
const path = require("path"); // path module
const mysql = require("mysql");
require('dotenv').config(); 


const app = express();
const port = 8000;

let db_con  = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database
});

db_con.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});


app.listen(port, () => {
  console.log(`webiste is listening on port ${port}!`)
});


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));


// all static content
app.use(express.static(path.join(__dirname, "./assets/")));

//app static 
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');// root route to render the index.ejs view

/*IMPORTANT
  Middle ware for route
*/
const routes = require('./routes/index');
routes(app);