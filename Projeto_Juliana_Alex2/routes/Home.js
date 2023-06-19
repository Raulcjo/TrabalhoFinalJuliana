const app = require("../config/server");

module.exports = function(app){

    app.get('/', function(req, res){
        res.render('pages/home/index');
    });
}