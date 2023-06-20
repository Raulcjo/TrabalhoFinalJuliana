const app = require("../config/server");
let db = require('../config/dbConnection')();



class Funcionario{

    adiciona(funcionario, res){
        let sql = 'INSERT INTO funcionario SET ?'
        db.query(sql,funcionario,(erro, resultado)=> {
            if(erro){
                res.status(400).json(erro)
                console.log(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM funcionario'
        db.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)}})
    }

    buscaPorId(id, res){
        let sql = 'SELECT * FROM funcionario WHERE id=?'// ? = 1
        db.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    
    altera(id, valores, res){
        let sql = 'UPDATE funcionario SET ? WHERE id_login_pk = ?'
        db.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

}

module.exports = new Login

