let mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        port: '3307',
        user: 'root',
        password: '',
        database: 'maridoAluguel'
    });
}