const mysql = require('mysql');

const conexion =mysql.createConnection({
    host: 'localhost',
    user: 'gmc',
    password:'fg002164.',
    database: 'crudclientes'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion fue: '+error );
        return
    }
    console.log('!Conectado a la  base de datos MySQL');
});

 module.exports = conexion;
