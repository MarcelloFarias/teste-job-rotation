const string = document.querySelector('.input');
const btnInverter = document.querySelector('.btn-inverter');
const outputContainer = document.querySelector('.output');

btnInverter.addEventListener('click', () => {
    if(string.value === '') {
        outputContainer.innerHTML = `<p>Você precisa digitar uma palavra !</p>`
    }
    else {
        let palavraInvertida = [];

        for(let i = string.value.length; i >= 0; i--) {
            palavraInvertida.push(string.value[i]);
        } 

        outputContainer.innerHTML = `<p>${palavraInvertida.join('')}</p>`;
    }
});