document.addEventListener( function() {
    function validarNome(nome) {
        var regex = /^[a-zA-Z\W\z]+$/;
        return regex.test(nome);
    }

    function validarEmail(email) {
      var regex = /^[a-z]+\W+[a-z].?[com]?[br]+$/;
      return regex.test(email);
    }

    function validarTel(tel) {
        var regex = /^\W?[0-9]{1,2}+\W+[0-9]{4,5}+\W+[0-9]{4}/;
        return regex.test(tel);
    }  

    function validarCpf(cpf) {
        var regex = /^[0-9]{3}\W[0-9]{3}\W[0-9]{3}\W[0-9]{2}$/;
        return regex.test(cpf);
    }  
  
    let nomeInput = document.getElementById('nome');
    let emailInput = document.getElementById('email');
    let telInput = document.getElementById('tel');
    let cpfInput = document.getElementById('cpf');
    let nome = nomeInput.value;
    let email = emailInput.value;
    let tel = telInput.value;
    let cpf = cpfInput.value;
    if (validarNome(nome)) {
      console.log("Nome válido");
    } else {
      console.log("Nome inválido");
    }

    if (validarEmail(email)) {
        console.log("Nome válido");
      } else {
        console.log("Nome inválido");
      }

    if (validarTel(tel)) {
        console.log("Nome válido");
      } else {
        console.log("Nome inválido");
      }

    if (validarCpf(cpf)) {
        console.log("Nome válido");
      } else {
        console.log("Nome inválido");
      }
  });
