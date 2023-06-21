const app = require("../config/server");

module.exports.renderS = function(app){

    app.get('/servico', function(req, res){
        res.render('pages/servico');
    });
}