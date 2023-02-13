const express = require('express');
const app = express();
const mainRoutes = require('./routers/main');
const path = require('path');
const publicPath = path.join(__dirname,'../public');

app.use(express.static(publicPath));

const  port = 3000;

app.listen(port, ()=> 
    console.log(`Servidor corriendo en el puerto ${port}`));

app.use('/', mainRoutes);

