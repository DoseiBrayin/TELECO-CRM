const express = require('express');
const morgan = require('morgan')

//Initializations
const app = express();

//Settings
app.set('port',process.env.PORT || 4000);

//Middlewarea
app.use(morgan('dev'));

//Global Variables

//Routes

//Public files

//Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'))
});