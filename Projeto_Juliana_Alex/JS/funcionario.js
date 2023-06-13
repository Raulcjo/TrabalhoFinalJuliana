function Salvar(){
    //let url = "http://localhost:8000/funcionario";
    let tableUser = document.querySelector('table');
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
    cel0.innerHTML = document.getElementById('id').value;
    cel1.innerHTML = document.getElementById('nome').value;
    cel2.innerHTML = document.getElementById('tel').value;
    cel3.innerHTML = document.getElementById('cpf').value;
    cel4.innerHTML = document.getElementById('email').value;
    cel5.innerHTML = document.querySelector("#genero").value;
    cel6.innerHTML = document.getElementById('data').value;
    cel7.innerHTML = '<i class="bi bi-pencil-square" onclick="Editar()"></i>';
    cel8.innerHTML = '<i class="bi bi-trash3" onclick="Remover()"></i>';

}

    function Editar(){
        let row = event.target.parentNode.parentNode;
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
        document.querySelector("#genero").value = genero;
        document.getElementById('data').value = data;

        row.remove();
    }



function Remover(){
    let funcionarios = document.querySelectorAll("tr");

    funcionarios.forEach(function(tr) {
        tr.addEventListener("click",  tr.remove);
    });

}
