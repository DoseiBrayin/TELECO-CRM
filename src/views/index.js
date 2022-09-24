const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path')

//Initializations
const app = express();

//Settings
app.set('port',process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'Layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('../lib/handlebars.js')
}));
app.set('view engine', '.hbs')

//Middlewarea
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global Variables
app.use((req,res,next)=>{
    next();
});

//Routes
app.use(require('../routes/'));
app.use(require('../routes/auth'));
app.use('/links',require('../routes/links'));


//Public files
app.use(express.static(path.join(__dirname,'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'))
});