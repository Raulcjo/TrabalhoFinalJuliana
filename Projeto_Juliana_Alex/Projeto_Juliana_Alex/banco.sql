CREATE DATABASE maridoAluguel;

CREATE TABLE servicos(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tipoServiço VARCHAR(50) NOT NULL,
    valorServico DOUBLE NOT NULL,
    descricao VARCHAR(200)
    
);

CREATE TABLE funcionario(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    email VARCHAR(50) NOT NULL,
    genero VARCHAR(15) NOT NULL,
    dataNasc DATE NOT NULL,
    credencial INT NOT NULL
);
 CREATE TABLE solicitacoes(  
   hora DATETIME NOT NULL,
   data DATE NOT NULL,
   cliente VARCHAR(50) NOT NULL,
   metodoPag VARCHAR(20) NOT NULL,
   dataNasc DATE NOT NULL,
   descricao VARCHAR(500) NOT NULL
);