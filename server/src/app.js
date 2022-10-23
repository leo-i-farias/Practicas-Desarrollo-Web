const express = require('express');
const app = express();
const cookies = require('cookie-parser');
const body_parser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const file = require('fs');
const path = require('path');

const users = JSON.parse(file.readFileSync(path.join(__dirname, '/database_users.json'), 'utf-8'));
const products = JSON.parse(file.readFileSync(path.join(__dirname, '/database.json'), 'utf-8'));
app.use(body_parser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(session({
    secret:'42641667',
    cookie: {expires: false},
    saveUninitialized: true,
    resave: false
}));
app.use(cookies());

app.get('/', (req, res) =>{
    const user = users[0];
    res.render('home', {user});
})
app.get('/producto/:id', (req,res) =>{
    const product_id = req.params.id;
    const product = products.filter(i => i.id == product_id);
    const producto = product[0];
    console.log(producto);
    res.render('detail_product', {producto});
})
app.get('/registro', (req, res) =>{
    res.render('registro');
})
app.post('/register', (req, res) =>{
    const {Nombre, Apellido, Nacimiento, Contraseña, Email} = req.body;
    const password_hash = bcrypt.hashSync(Contraseña, 10);
    const new_user = {
        name: Nombre,
        last_name: Apellido,
        birth_date: Nacimiento,
        password: password_hash,
        email: Email
    };
    users.push(new_user);
    file.writeFileSync(path.join(__dirname, '/database_users.json'), JSON.stringify(users));
    res.send("Registro completo");
    console.log(users);
})
app.get('/login', (req, res) =>{
    res.render('login');
})
app.post('/login', (req, res) =>{
    const {Email, Contraseña} = req.body;
    const user = users[0];
    const validar_password = bcrypt.compareSync(Contraseña, user.password);
    if(validar_password){
        res.redirect('/');
    }
    else{
        res.send("Contraseña incorrecta");
    }
})
app.get('/ver-cookies', (req, res) =>{
    return res.json({cookies: req.cookies});
})
app.get('/set-cookie', (req, res) =>{
    const {cookie} = req.query;
    res.cookie('1-minute-cookie', cookie, {maxAge: 1000*60});
    return res.send(cookie);
})
app.listen(3000, () => console.log("Servidor listo"));