function Salvar(){
    let jsonSend = `{ "id":"${document.getElementById('id').value}",
    "nome":"${document.getElementById('nome').value}",
    "cpf":"${document.getElementById('cpf').value}",
    "email":"${document.getElementById('email').value}",
    "fone":"${document.getElementById('fone').value}",
    "loja":"${document.getElementById('loja').value}"
 }`;
    alert(jsonSend);
}