const express = require('express');
const app = express();

//app.get('/',(req, res) => {
//    res.send('Bienvenidos a CRUD de JAVASCRIPT')
//})
//app.get('/', (req, res) => {
//    res.send('Bienvenidos')
//})
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(4455, () => {
    console.log('Servidor corriendo en http://localhost:4455');
});