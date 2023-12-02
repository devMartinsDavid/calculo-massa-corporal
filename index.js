document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = peso / (altura * altura);
    var resultado = 'Seu IMC é: ' + imc.toFixed(2) + '<br>';

    

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

    var resultadoElement = document.getElementById('resultadoModal');
    resultadoElement.innerHTML = ''; // Limpa o conteúdo

    // Mostra o modal
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';

    var closeButton = document.getElementsByClassName('modal-close')[0];
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Adiciona animação com GSAP ao mostrar o modal
    gsap.from(modal, { opacity: 0, duration: 0.9 });

    // Configuração do efeito de texto digitado com Typed.js
    var options = {
        strings: [resultado],
        typeSpeed: 50, // Velocidade de digitação em milissegundos
        showCursor: true, // Define se o cursor piscará enquanto digita
        // cursorChar: '|',
        autoInsertCas: true,
        prependCursor: true,
    };
    
    new Typed(resultadoElement, options);
});