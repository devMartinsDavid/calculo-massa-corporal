document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao enviar o formulário

    // Obtém os valores de peso e altura
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcula o IMC
    var imc = peso / (altura * altura);
    var resultado = 'Seu IMC é: ' + imc.toFixed(2) + '<br>';

    // Verifica a classificação com base no IMC
    if (imc < 18.5) {
        resultado += 'Classificação: Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado += 'Classificação: Peso normal';
    } else if (imc >= 24.9 && imc < 29.9) {
        resultado += 'Classificação: Sobrepeso';
    } else if (imc >= 29.9 && imc < 34.9) {
        resultado += 'Classificação: Obesidade Grau I';
    } else if (imc >= 34.9 && imc < 39.9) {
        resultado += 'Classificação: Obesidade Grau II (severa)';
    } else {
        resultado += 'Classificação: Obesidade Grau III (mórbida)';
    }

    // Exibe o resultado no modal
    document.getElementById('resultadoModal').innerHTML = resultado;

    // Mostra o modal
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Fecha o modal ao clicar no botão de fechar
    var closeButton = document.getElementsByClassName('modal-close')[0];
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // Fecha o modal ao clicar fora da área do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});