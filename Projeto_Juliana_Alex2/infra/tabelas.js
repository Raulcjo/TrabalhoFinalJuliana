class Tabelas{
    // construtor de Tabela
    init(conexao){
        this.conexao = conexao
        this.criarFuncionario()
        this.criarServico()
        this.criarSolicitacao()
    }


    criarFuncionario(){
        let sql = 'CREATE TABLE IF NOT EXISTS funcionario '+
        '(id_funci INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'nome VARCHAR(50) NOT NULL,'+
        'telefone VARCHAR(20) NOT NULL,'+
        'cpf VARCHAR(11) NOT NULL,'+
        'email VARCHAR(50) NOT NULL,'+
        'genero VARCHAR(15) NOT NULL,'+
        'dataNasc DATE NOT NULL,'+
        "credencial INT NOT NULL')"
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela funcionarios criada com sucesso!')
            }
        })
    }

    criarServico(){
        let sql = 'CREATE TABLE IF NOT EXISTS servicos '+
        '(id_serv INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'tipoServiço VARCHAR(50) NOT NULL,'+
        'valorServico DOUBLE NOT NULL,'+
        "descricao VARCHAR(200)')"
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela servicos criada com sucesso!')
            }
        })
    }

    criarSolicitacao(){
        let sql = 'CREATE TABLE IF NOT EXISTS solicitacoes '+
        '(id_soli INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'hora DATETIME NOT NULL,'+
        'data DATE NOT NULL,'+
        'cliente VARCHAR(50) NOT NULL,'+
        'metodoPag VARCHAR(20) NOT NULL,'+
        'statusAndamento VARCHAR(20) NOT NULL,'+
        'dataNasc DATE NOT NULL,'+
        "descricao VARCHAR(500) NOT NULL')"
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela solicitacoes criada com sucesso!')
            }
        })
    }
}


module.exports = new Tabelas





