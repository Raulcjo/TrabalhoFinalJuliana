const Funcionario = require('../model/routeFuncionario');
const rota = '/funcionarios'

module.exports = app => {

    app.get(rota, (req, res) => {
       // retorna os dados??
       Funcionario.lista(res)
    })
    app.get((rota+'/:id'),(req, res) => {
       let id = parseInt(req.params.id)
       Funcionario.buscaPorId(id, res)
    })
    app.post(rota, (req, res) => {
       console.log(req.body)
       Funcionario.adiciona(req.body, res)
       //res.send('Você esta na rota '+ rota +' via POST')
    })
    //PUT??
    app.patch((rota+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       Funcionario.altera(id, valores, res)
    })
 }