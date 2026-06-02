// 1. Seleciona os elementos do HTML que vamos manipular
const btnToggle = document.getElementById('btn-toggle');
const extraInfo = document.getElementById('extra-info');

// 2. Adiciona um evento de "escuta" para o clique do botão
btnToggle.addEventListener('click', () => {
    
    // Alterna a classe 'hidden' (se tiver, tira; se não tiver, coloca)
    extraInfo.classList.toggle('hidden');
    
    // 3. Muda o texto do botão dinamicamente
    if (extraInfo.classList.contains('hidden')) {
        btnToggle.textContent = 'Saiba Mais';
    } else {
        btnToggle.textContent = 'Recolher Informações';
    }
});