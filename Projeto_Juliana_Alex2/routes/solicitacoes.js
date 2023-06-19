const app = require("../config/server");

module.exports.getSolicitacoes = function(app){

    app.get('/solicitacoes', function(req, res){
        res.render('pages/solicitacao');
    });
}