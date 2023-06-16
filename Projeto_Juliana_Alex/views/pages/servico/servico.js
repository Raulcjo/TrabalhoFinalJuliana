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
    col3.innerHTML = '<i class="bi bi-pencil-square" onclick="Editar(this)"></i>';
    col4.innerHTML = '<i class="bi bi-trash3" onclick="Remover(this)"></i>';
}

function Remover(target) {
  const linha = target.parentNode.parentNode;
  linha.remove();
}

function Editar(target){
    let row = target.parentNode.parentNode;
    let col0 = row.cells[0];
    let col1 = row.cells[1];
    let col2 = row.cells[2];
    
    let id = col0.innerHTML;
    let servico = col1.innerHTML;
    let valor = col2.innerHTML;
    
    document.getElementById('id').value = id;
    document.getElementById('servico').value = servico;
    document.getElementById('valor').value = valor;
    
    row.remove();
}