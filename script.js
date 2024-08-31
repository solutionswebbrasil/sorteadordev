function sortear() {
    // Obter os valores dos inputs
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    
    // Verificar se os valores são válidos
    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    // Gerar um número aleatório entre min e max
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibir o resultado
    document.getElementById('resultado').textContent = `Número sorteado: ${numeroSorteado}`;
}
