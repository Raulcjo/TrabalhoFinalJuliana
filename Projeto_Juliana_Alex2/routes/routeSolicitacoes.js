const app = require("../config/server");

module.exports.renderSolicitacoes = function(app){

    app.get('/solicitacoes', function(req, res){
        res.render('pages/solicitacao');
    });
}