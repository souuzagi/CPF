function validarCPF() {
    var cpf = document.getElementById("cpfInput").value.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || !validarDigitos(cpf)) {
        document.getElementById("resultado").innerText = "Seu CPF está inválido";
    } else {
        document.getElementById("resultado").innerText = "Seu CPF foi válidado com sucesso";
    }
}

function validarDigitos(cpf) {
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = soma % 11;
    var digito1 = resto < 2 ? 0 : 11 - resto;

    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    var digito2 = resto < 2 ? 0 : 11 - resto;

    return (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2);
}