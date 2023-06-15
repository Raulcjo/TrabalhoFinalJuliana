module.exports = function(express){
    express.get('/', function(request, response){
        response.render('pages/home/login'); //Renderizando uma página web
    });
}

function Entrar(){
    
}