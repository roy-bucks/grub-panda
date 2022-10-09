const express = require('express'); 
const route = require('./routes'); 
const bodyParser = require('body-parser'); 
const path = require("path"); // path module


const app = express();
const port = 8000;


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