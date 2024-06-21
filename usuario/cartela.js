// Função para gerar números aleatórios sem repetição
function gerarNumerosAleatorios(totalNumeros) {
    let numeros = [];
    while (numeros.length < totalNumeros) {
      let numero = Math.floor(Math.random() * 75) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    return numeros;
  }
  
  // Função para preencher a cartela com números aleatórios
function preencherCartela() {
    let numeros = gerarNumerosAleatorios(25); // Gerar 25 números para preencher a cartela
    let cartela = document.getElementById('cartela');
  
    for (let i = 0; i < 5; i++) {
      let linha = document.createElement('div');
      linha.classList.add('linha');
      for (let j = 0; j < 5; j++) {
        let celula = document.createElement('div');
        celula.classList.add('celula');
        celula.textContent = numeros[i * 5 + j];
        linha.appendChild(celula);
      }
      cartela.appendChild(linha);
    }
}
  
  // Chamar a função para preencher a cartela ao carregar a página
preencherCartela();
  