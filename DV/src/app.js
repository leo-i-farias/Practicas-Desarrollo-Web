const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));

app.listen(PORT, () =>{console.log("Servidor listo en puerto ${PORT}")});