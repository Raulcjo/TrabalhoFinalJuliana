module.exports = function(express){

    express.get('/', functiuon(request, response),{
        response.render('pages/home/index');
    });
}