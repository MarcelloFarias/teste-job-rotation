const inputNumber = document.querySelector('.input-number');
const btnEnviar = document.querySelector('.btn-enviar');
const outputContainer = document.querySelector('.output');
const mensagemContainer = document.querySelector('.mensagem');

btnEnviar.addEventListener('click', () => {
    let sequenciaFibonacci = [0, 1];
    let penultimoNumero = 0;
    let ultimoNumero = 1;

    if(inputNumber.value !== '') {
        for(let i = 3; i <= inputNumber.value; i++) {
            let copia = [...sequenciaFibonacci];
            let soma = penultimoNumero + ultimoNumero;
            penultimoNumero = ultimoNumero;
            ultimoNumero = soma;
            copia.push(ultimoNumero);
            sequenciaFibonacci = copia;
        }
        outputContainer.innerHTML = `<p>${sequenciaFibonacci.join(',')}</p>`;

        for(let i = 0; i < sequenciaFibonacci.length; i++) {
            if(sequenciaFibonacci[i] == inputNumber.value) {
                mensagemContainer.innerHTML = `<p>O número digitado se encontra na sequência</p>`;
                i = sequenciaFibonacci.length;
            }
            else {
                mensagemContainer.innerHTML = `<p>O número digitado não se encontra na sequência</p>`;
            }
        }
    }
    else {
        outputContainer.innerHTML = `<p>Você precisa digitar um número !</p>`;
    }
});