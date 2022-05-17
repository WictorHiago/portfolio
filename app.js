const express = require('express')
const exphbs = require('express-handlebars');
//controller
const mainController = require('./controller/mainController');

const app = express()

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs.engine());
//assets
app.use(express.static('public'))

//routes
const showRoutes = require('./routes/showRoutes')

app.use('/pages', showRoutes)
app.use('/', mainController.homePage)












app.listen(3000,()=>{console.log('server on! port: 3000')})