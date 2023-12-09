const express = require('express');
const path =require('path');
const app = express();
const bodyParser =require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended : false});
const { check ,validationResult} = require('express-validator');
//connect mongoDB
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/lists");
const db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error!!'));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public',express.static('/public'));
app.use(express.urlencoded({ extended:false}) );
 //public as static files access
app.use(require("./routes/route")); //acess all routess
app.use(require("./models/todo")); //acess modules i.e our model schema
app.use(require("./models/log"));
app.use(express.json());






app.listen(8000,()=>{
  console.log('Server is listening on port 8000');
});

