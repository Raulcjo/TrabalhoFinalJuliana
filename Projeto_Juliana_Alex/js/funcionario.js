function fazPost(url, toJson){
    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(JSON.stringify(toJson));
    req.onload = function(){
        console.log(this.responseText);
    }
    return req.responseText
}

function Salvar(){
    let url = "http://localhost:3000/login";
    let tableUser = document.querySelector('.table');

    let nome = document.getElementById('nome').value;
    let tel = document.getElementById('tel').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let genero = document.querySelector('#genero').value;
    let data = document.getElementById('data').value;

    let toJson = `{ 
    "nome":"${nome}",
    "tel":"${tel}",
    "cpf":"${cpf}",
    "email":"${email}",
    "genero":"${genero}",
    "data":"${data}"
    }`

    fazPost(url, toJson);

    
    let row = tableUser.insertRow();
    let cel0 = row.insertCell(0);
    let cel1 = row.insertCell(1);
    let cel2 = row.insertCell(2);
    let cel3 = row.insertCell(3);
    let cel4 = row.insertCell(4);
    let cel5 = row.insertCell(5);
    let cel6 = row.insertCell(6);
    let cel7 = row.insertCell(7);
    let cel8 = row.insertCell(8);
    cel0.innerHTML = 
    cel1.innerHTML = 
    cel2.innerHTML = 
    cel3.innerHTML = 
    cel4.innerHTML = 
    cel5.innerHTML = 
    cel6.innerHTML = 
    cel7.innerHTML = '<i class="bi bi-pencil-square" onclick="Editar(this)"></i>';
    cel8.innerHTML = '<i class="bi bi-trash3" onclick="Remover(this)"></i>';

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
