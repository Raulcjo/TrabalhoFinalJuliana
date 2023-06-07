function Salvar(){
    let table = document.querySelector('.table');
    let row = table.insertRow();
    let col0 = row.insertCell(0);
    let col1 = row.insertCell(1);
    let col2 = row.insertCell(2);
    let col3 = row.insertCell(3);
    let col4 = row.insertCell(4);
    col0.innerHTML = document.getElementById('id').value;
    col1.innerHTML = document.getElementById('servico').value;
    col2.innerHTML = document.getElementById('valor').value;
    col3.innerHTML = '<i class="bi bi-pencil-square"></i>';
    col4.innerHTML = '<i class="bi bi-trash3"></i>';
}