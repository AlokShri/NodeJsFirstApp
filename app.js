const path = require('path');

const http  =  require ('http');

const express =  require('express');

const homeRoutes = require('./routes/home');

const bodyParser =  require('body-parser');

const sequelize = require('./utils/database');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")))

app.use(homeRoutes);

app.use((req,res,next) => {

  res.status(404).sendFile(path.join(__dirname,"views","404.html"));

});

sequelize.sync()
.then(result =>{
  console.log('Sever statrs..')
  app.listen(3000);
})
.catch(err=>{
  console.log(err);
});

