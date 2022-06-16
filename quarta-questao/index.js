function main() {
    const faturamentos = [
        {
            estado: 'SP', valor: '67.83643'
        },
        {
            estado: 'RJ', valor: '36.67866'
        },
        {
            estado: 'MG', valor: '29.22988'
        },
        {
            estado: 'ES', valor: '27.16548'
        },
        {
            estado: 'Outros', valor: '19.84953'
        }
    ];

    let totalMensal = 0;

    for(let i = 0; i < faturamentos.length; i++) {
        totalMensal = totalMensal + parseFloat(faturamentos[i].valor);
    }

    console.log(`Faturamento mensal total: ${parseFloat(totalMensal).toFixed(3)}`);

    for(let i = 0; i < faturamentos.length; i++) {
        const porcentagem = ((faturamentos[i].valor / totalMensal) * 100);

        console.log(`A porcentagem do estado '${faturamentos[i].estado}' é: ${porcentagem.toFixed(2)}%`);
    }
}

main();