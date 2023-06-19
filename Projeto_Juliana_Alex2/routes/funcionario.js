const app = require("../config/server");

module.exports.getFuncionarios = function(app){

    app.get('/funcionarios', function(req, res){
        res.render('pages/funcionario');
    });
}