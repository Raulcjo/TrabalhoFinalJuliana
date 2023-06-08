function Salvar(){
    let tableUser = document.querySelector('.table');
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
    cel5.innerHTML = document.getElementsByName('genero').value;
    cel6.innerHTML = document.getElementById('data').value;
    cel7.innerHTML = '<i class="bi bi-pencil-square"></i>';
    cel8.innerHTML = '<i class="bi bi-trash3"></i>';

}
