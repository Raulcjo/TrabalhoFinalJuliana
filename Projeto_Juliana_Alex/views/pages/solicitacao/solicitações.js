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
    col7.innerHTML = '<i class="bi bi-pencil-square" onclick="Editar(this)"></i>';
    col8.innerHTML = '<i class="bi bi-trash3" onclick="Remover(this)"></i>';
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
    let col7 = row.cells[7];
    let col8 = row.cells[8];

    let id = col0.innerHTML;
    let funci = col1.innerHTML;
    let dia = col2.innerHTML;
    let clien = col3.innerHTML;
    let servi = col4.innerHTML;
    let pagamento = col5.innerHTML;
    let cep = col6.innerHTML;

    document.getElementById('id').value = id;
    document.getElementById('funci').value = funci;
    document.getElementById('dia').value = dia;
    document.getElementById('clien').value = clien;
    document.getElementById('servi').value = servi;
    document.getElementById('pagamento').value = pagamento;
    document.getElementById('cep').value = cep;

    row.remove();
}