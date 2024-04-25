function mostrarDataHoraAtual() {
    alert("Data e Hora Atuais: " + new Date().toLocaleString());
}

function mostrarResultado(resultado, ehValidacao) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = resultado;
}

function validarCPF() {
    var cpf = prompt("Digite o CPF para validar:");
    cpf = cpf.replace(/[^\d]+/g,''); 
    if(cpf === '' || cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        mostrarResultado("CPF inválido!");
    } else {
        var soma = 0;
        for (var i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
        var resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) {
            mostrarResultado("CPF inválido!");
        } else {
            soma = 0;
            for (var i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
            resto = 11 - (soma % 11);
            if (resto === 10 || resto === 11) resto = 0;
            if (resto !== parseInt(cpf.charAt(10))) {
                mostrarResultado("CPF inválido!");
            } else {
                mostrarResultado("CPF válido!");
            }
        }
    }
}


function validarCNPJ() {
    var cnpj = prompt("Digite o CNPJ para validar:");
    cnpj = cnpj.replace(/[^\d]+/g,''); 
    if(cnpj === '' || cnpj.length !== 14) {
        mostrarResultado("CNPJ inválido!");
    } else {
        if (/^(\d)\1{13}$/.test(cnpj)) {
            mostrarResultado("CNPJ inválido!");
        } else {
            var tamanho = cnpj.length - 2;
            var numeros = cnpj.substring(0, tamanho);
            var digitos = cnpj.substring(tamanho);
            var soma = 0;
            var pos = tamanho - 7;
            for (var i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) pos = 9;
            }
            var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (resultado !== parseInt(digitos.charAt(0))) {
                mostrarResultado("CNPJ inválido!");
            } else {
                tamanho = tamanho + 1;
                numeros = cnpj.substring(0, tamanho);
                soma = 0;
                pos = tamanho - 7;
                for (var i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2) pos = 9;
                }
                resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
                if (resultado !== parseInt(digitos.charAt(1))) {
                    mostrarResultadoValidacao("CNPJ inválido!");
                } else {
                    mostrarResultadoValidacao("CNPJ válido!");
                }
            }
        }
    }
}

function mostrarValorAbsoluto() {
    var numero = parseFloat(prompt("Digite um número para obter o valor absoluto:"));
    var resultado = "O valor absoluto de " + numero + " é: " + Math.abs(numero);
    mostrarResultado(resultado);
}

function mostrarValorArredondado() {
    var numero = parseFloat(prompt("Digite um número para arredondar:"));
    var resultado = "O valor arredondado de " + numero + " é: " + Math.round(numero);
    mostrarResultado(resultado);
}

function calcularComissao() {
    var valorVenda = parseFloat(prompt("Digite o valor da venda:"));
    var taxaComissao = parseFloat(prompt("Digite a taxa de comissão (%):"));
    var comissao = valorVenda * (taxaComissao / 100);
    var resultado = "A comissão é: R$" + comissao.toFixed(2);
    mostrarResultado(resultado);
}