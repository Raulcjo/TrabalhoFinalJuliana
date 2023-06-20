// npm install express consign body-parser mysql cors express-form-data
// npm --save-dev install nodemon
// Comando para iniciar a aplicação: npm start

let customServer = require('./config/server'); //Importa o servidor Express configurado anteriormente 
const conexao = require('./config/dbConnection');
const Tabelas = require('./infra/tabelas');
const app = customServer();

/*let rotaFuncionario = require('./model/routeFuncionario');
rotaFuncionario.renderFuncionarios(app);

let rotaServicos = require('./model/routeServicos');
rotaServicos.renderServicos(app);

let rotaSolicitacoes = require('./model/routeSolicitacoes');
rotaSolicitacoes.renderSolicitacoes(app);*/

app.listen(8000, function(){ //Configurando a porta que o servidor vai funcionar
    console.log("Servidor iniciado na porta 8000");
});

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Concetado ao banco de dados!')

        Tabelas.init(conexao)
        const app = customServer()
        
        app.listen(8000,() => console.log('servidor rodando na porta 8000'))
    }
})