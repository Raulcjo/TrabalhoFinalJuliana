function Salvar(){
    let table = document.querySelector('.table');
    let row = table.insertRow();
    let col0 = row.insertCell(0);
    let col1 = row.insertCell(1);
    let col2 = row.insertCell(2);
    let col3 = row.insertCell(3);
    let col4 = row.insertCell(4);
    let col5 = row.insertCell(5);
    let col6 = row.insertCell(6);
    let col7 = row.insertCell(7);
    let col8 = row.insertCell(8);
    col0.innerHTML = document.getElementById('id').value;
    col1.innerHTML = document.getElementById('funci').value;
    col2.innerHTML = document.getElementById('dia').value;
    col3.innerHTML = document.getElementById('clien').value;
    col4.innerHTML = document.getElementById('servi').value;
    col5.innerHTML = document.getElementById('pagamento').value;
    col6.innerHTML = document.getElementById('cep').value;
    col7.innerHTML = '<i class="bi bi-pencil-square"></i>';
    col8.innerHTML = '<i class="bi bi-trash3"></i>';
}