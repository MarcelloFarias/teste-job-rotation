def main():
    numero = int(input('Informe um numero -> '))
    penultimo = 0
    ultimo = 1
    sequenciaFibonacci = ['0', '1']

    for i in range(numero):
        soma = penultimo + ultimo
        penultimo = ultimo
        ultimo = soma
        sequenciaFibonacci.append(str(ultimo))

    sequencia = ', '.join(sequenciaFibonacci)

    print(f'A sequencia sera: {sequencia}')

    encontrou = False

    for n in sequenciaFibonacci:
        if str(numero) == n:
            encontrou = True

    if encontrou:
        print('O numero digitado se encontra na sequencia !')
    else:
        print('O numero digitado nao se encontra na sequencia !')

main()