let express = require('express'); //Express é uma biblioteca que controla as rotas da aplicação
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = () => {
    const app = express()
    
    app.set('view engine', 'ejs'); //Configurando o EJS como visualizador padrão
    app.use(express.static('views/static')); // Configurando o Express para arquivos estáticos
    app.use(bodyParser.urlencoded({extended:true}))//Config o Express para receber formulários Html como json
    app.use(bodyParser.json())//Configurando o Express para trabalhar com json
    app.use(cors())
    consign()
        .include('controller')
        .into(app)
    
    return app
}