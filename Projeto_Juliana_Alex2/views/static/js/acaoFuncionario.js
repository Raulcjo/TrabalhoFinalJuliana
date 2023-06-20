function fazPost(url, body){
    let req = new XMLHttpRequest()
    req.open("POST", url, true)
    req.setRequestHeader("Content-type", "application/json")
    req.send(JSON.stringify(body))
    req.onload = function(){
        console.log(this.responseText)
    }
    return req.responseText
}

function Salvar(){
    let url = "http://localhost:8000/ctrFuncionario";
    let nome = document.getElementById('nome').value;
    let tel = document.getElementById('tel').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let genero = document.querySelector('#genero').value;
    let data = document.getElementById('data').value;
    
    body = { 
        "nome": nome,
        "tel": tel,
        "cpf": cpf,
        "email": email,
        "genero": genero,
        "data": data
        }
    fazPost(url, body)
}

function Remover(target) {
    const linha = target.parentNode.parentNode;
    linha.remove();
}

function Editar(target) {
    let row = target.parentNode.parentNode;
    let col0 = row.cells[0];
    let col1 = row.cells[1];
    let col2 = row.cells[2];
    let col3 = row.cells[3];
    let col4 = row.cells[4];
    let col5 = row.cells[5];
    let col6 = row.cells[6];

    let id = col0.innerHTML;
    let nome = col1.innerHTML;
    let tel = col2.innerHTML;
    let cpf = col3.innerHTML;
    let email = col4.innerHTML;
    let genero = col5.innerHTML;
    let data = col6.innerHTML;

    document.getElementById('id').value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('tel').value = tel;
    document.getElementById('cpf').value = cpf;
    document.getElementById('email').value = email;
    document.querySelector('#genero').value = genero;
    document.getElementById('data').value = data;

    row.remove();
}
