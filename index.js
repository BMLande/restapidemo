// create express instance
const Express = require('express');  
const app = new Express();
const { json } =  require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectionManager = require('./gateways/connectionManager');
const PORT  = process.env.PORT || 5000;

// add middlware and routes and db connection
dotenv.config();
app.use(morgan('dev'));
app.use(bodyParser.json());

// Db Conenction
try {
     connectionManager.connect();    
} catch (error) {
    console.log("DB ERROR::",error);
}

// Add all routes here
app.use('/user' , require('./routes/user'));
app.use('/books' , require('./routes/books'));

// start server
app.listen(PORT , function(err){
    if (!err) {
        console.log('server started...');
    }
}); 