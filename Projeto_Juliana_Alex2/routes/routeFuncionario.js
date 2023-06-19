const app = require("../config/server");
let db = require('../config/dbConnection')();

module.exports.renderFuncionarios = function(app){

    app.get('/funcionarios', function(req, res){
        res.render('pages/funcionario');
    });
}

module.exports.getFuncionario = function(app){
    app.get('/funcionarios', function(req, res){
        db.query('select * from funcionario;', function(erro, result){
            if(erro){
                console.log("Erro: " + erro);
            }

            res.json(result);
        });
    })
}

module.exports.createFuncinario = function(app){
    app.post('/funcionarios', function(req, res){
        const {nome, telefone, cpf, email, genero, dataNasc, credencial} = req.body;
        console.log(nome + " " + telefone + " " + cpf + " " + email + " " + genero + " " + dataNasc + " " + credencial);

        const data = [nome, telefone, cpf, email, genero, dataNasc, credencial];

        db.query('insert into funcionario(nome, telefone, cpf, email, genero, dataNasc, credencial) values(?, ?, ?, ?, ?, ?, ?);', data, function(erro, result){
            if(erro){
                console.log("Erro: " + erro);
            }
            res.status(201).json({message: "ok"});
        });
    })
}