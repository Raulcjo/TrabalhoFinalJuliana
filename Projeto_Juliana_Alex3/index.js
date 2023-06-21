let app = require('./config/server'); //Importa o servidor Express configurado anteriormente 

let rotaHome = require('./model/Home');
rotaHome(app);

let rotaFuncionario = require('./model/routeFuncionario');
rotaFuncionario.renderF(app);
rotaFuncionario.funcionarioAPI(app);

let rotaServicos = require('./model/routeServicos');
rotaServicos.renderS(app);

let rotaSolicitacoes = require('./model/routeSolicitacoes');
rotaSolicitacoes.renderSo(app);

app.listen(8000, function(){ //Configurando a porta que o servidor vai funcionar
    console.log("Servidor iniciado na porta 8000");
});
