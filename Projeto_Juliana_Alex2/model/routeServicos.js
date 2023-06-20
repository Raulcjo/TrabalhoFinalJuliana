const app = require("../config/server");

module.exports.renderServicos = function(app){

    app.get('/servicos', function(req, res){
        res.render('pages/servico');
    });
}