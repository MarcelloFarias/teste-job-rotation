function calcularMenorFaturamento(faturamentos) {
    let menorFaturamento = faturamentos[0].valor;
    let diaMenorFaturamento;

    for(let i = 0; i < faturamentos.length; i++) {
        if(faturamentos[i].valor > 0 && faturamentos[i].valor < menorFaturamento) {
            menorFaturamento = faturamentos[i].valor;
        }

        for(let j = i; j < faturamentos.length; j++) {
            if(faturamentos[j].valor === menorFaturamento) {
                diaMenorFaturamento = faturamentos[j].dia;
            }
        }
    }

    return `dia: ${diaMenorFaturamento} com o valor de: ${menorFaturamento}`;
}

function calcularMaiorFaturamento(faturamentos) {
    let maiorFaturamento = faturamentos[0].valor;
    let diaMaiorFaturamento;

    for(let i = 0; i < faturamentos.length; i++) {
        if(faturamentos[i].valor > 0 && faturamentos[i].valor > maiorFaturamento) {
            maiorFaturamento = faturamentos[i].valor;
        }

        for(let j = i; j < faturamentos.length; j++) {
            if(faturamentos[j].valor === maiorFaturamento) {
                diaMaiorFaturamento = faturamentos[j].dia;
            }
        }
    }

    return `dia: ${diaMaiorFaturamento} com o valor de: ${maiorFaturamento}`;
}

function calcularMediaFaturamento(faturamentos) {
    let soma = 0;
    let quantidade = 0;
    let media;

    for(let i = 0; i < faturamentos.length; i++) {
        if(faturamentos[i].valor > 0) {
            soma = soma + faturamentos[i].valor;
            quantidade++;
        }
    }

    media = soma / quantidade;
    return media;
}

function verificarFaturamentosSuperiores(faturamentos) {
    const dias = [];
    const mediaMensal = calcularMediaFaturamento(faturamentos);

    for(let i = 0; i < faturamentos.length; i++) {
        if(faturamentos[i].valor > mediaMensal) {
            dias.push(faturamentos[i].dia);
        }
    }

    return dias;
}

function main() {
    const faturamentos = [
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ];

    const dias = verificarFaturamentosSuperiores(faturamentos);

    console.log('Relatório de faturamentos mensal:')
    console.log(`O menor faturamento foi do ${calcularMenorFaturamento(faturamentos)}`);
    console.log(`O maior faturamento foi do ${calcularMaiorFaturamento(faturamentos)}`);
    console.log(`A quantidade de dias com o faturamento maior que a média mensal é: ${dias.length}, são eles: ${dias.join(',')}`);
}

main();