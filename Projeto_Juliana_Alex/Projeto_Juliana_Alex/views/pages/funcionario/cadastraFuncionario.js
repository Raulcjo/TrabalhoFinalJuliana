let db = require('../config/dbConnection')();


module.exports.getClientesAPI = function(app){
    app.get('/clientes', function(req, res){
        db.query('select * from cliente;', function(erro, result){
            if(erro){
                console.log("Erro: " + erro);
            }

            res.json(result);
        });
    })
}

module.exports.createClienteAPI = function(app){
    app.post('/funcionario', function(req, res){
        const {nome, telefone, cpf, email, genero, dataNasc, credencial} = req.body;
        console.log(nome + " " + telefone + " " + cpf + " " + email + " " + genero + " " + dataNasc + " " + credencial);

        const data = [razaosocial, cnpj, limite_credito];

        db.query('insert into funcionario(nome, telefone, cpf, email, genero, dataNasc, credencial) values(?, ?, ?, ?, ?, ?, ?);', data, function(erro, result){
            if(erro){
                console.log("Erro: " + erro);
            }
            res.status(201).json({message: "ok"});
        });
    })
}