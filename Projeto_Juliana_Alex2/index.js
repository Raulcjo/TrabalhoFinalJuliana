let app = require('./config/server'); //Importa o servidor Express configurado anteriormente 

let rotaHome = require('./routes/Home'); //Impotação da rotaHome 
rotaHome(app); //Executando a rotaHome

let rotaFuncionario = require('./routes/funcionario');
rotaFuncionario.getFuncionarios(app);

let rotaServicos = require('./routes/servicos');
rotaServicos.getServicos(app);

let rotaSolicitacoes = require('./routes/solicitacoes');
rotaSolicitacoes.getSolicitacoes(app);

app.listen(8000, function(){ //Configurando a porta que o servidor vai funcionar
    console.log("Servidor iniciado na porta 8000");
});
