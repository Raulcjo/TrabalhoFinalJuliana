const app = require("../config/server");

module.exports.renderSo = function(app){

    app.get('/solicitacao', function(req, res){
        res.render('pages/solicitacao');
    });
}