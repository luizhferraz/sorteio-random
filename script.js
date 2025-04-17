document.addEventListener('DOMContentLoaded', function() {
    const botaoSortear = document.getElementById('sortear');
    const botaoResetar = document.getElementById('resetar');
    const resultado = document.getElementById('resultado');
    const listaHistorico = document.getElementById('lista-historico');
    let historico = [];
    let ultimoSorteado = null;
    let penultimoSorteado = null;
    
    // Criar o modal de confirmação
    criarModalConfirmacao();
    
    botaoSortear.addEventListener('click', function() {
        // Gerar número aleatório entre 1 e 300
        const numeroSorteado = Math.floor(Math.random() * 300) + 1;
        
        // Atualizar o penúltimo número
        penultimoSorteado = ultimoSorteado;
        ultimoSorteado = numeroSorteado;
        
        // Exibir o número sorteado
        resultado.textContent = numeroSorteado;
        
        // Adicionar o número ao histórico (sem duplicatas)
        if (!historico.includes(numeroSorteado)) {
            historico.push(numeroSorteado);
        }
        
        // Ordenar o histórico em ordem crescente
        historico.sort((a, b) => a - b);
        
        // Atualizar a exibição do histórico
        atualizarHistorico();
    });
    
    botaoResetar.addEventListener('click', function() {
        // Mostrar o modal de confirmação
        document.getElementById('modal-confirmacao').style.display = 'flex';
    });
    
    function atualizarHistorico() {
        // Limpar a lista de histórico atual
        listaHistorico.innerHTML = '';
        
        // Adicionar cada número do histórico à lista
        historico.forEach(numero => {
            const elemento = document.createElement('div');
            elemento.textContent = numero;
            elemento.className = 'numero-historico';
            
            // Verificar se é o penúltimo número sorteado
            if (numero === penultimoSorteado && penultimoSorteado !== null) {
                elemento.classList.add('ultimo-sorteado'); // Mantendo o nome da classe para não alterar o CSS
            }
            
            listaHistorico.appendChild(elemento);
        });
    }
    
    function resetarSorteio() {
        // Limpar o histórico
        historico = [];
        // Resetar os números rastreados
        ultimoSorteado = null;
        penultimoSorteado = null;
        // Resetar o número exibido
        resultado.textContent = '-';
        // Limpar a lista visível
        listaHistorico.innerHTML = '';
        // Fechar o modal
        document.getElementById('modal-confirmacao').style.display = 'none';
    }
    
    function criarModalConfirmacao() {
        // Criar o elemento do modal
        const modal = document.createElement('div');
        modal.id = 'modal-confirmacao';
        modal.className = 'modal';
        
        // Conteúdo do modal
        modal.innerHTML = `
            <div class="modal-content">
                <h3>Confirmar Reset</h3>
                <p>Tem certeza que deseja resetar o sorteio? Todos os números sorteados serão perdidos.</p>
                <div class="modal-actions">
                    <button id="btn-confirmar" class="btn-confirmar">Confirmar</button>
                    <button id="btn-cancelar" class="btn-cancelar">Cancelar</button>
                </div>
            </div>
        `;
        
        // Adicionar o modal ao documento
        document.body.appendChild(modal);
        
        // Adicionar event listeners aos botões do modal
        document.getElementById('btn-confirmar').addEventListener('click', resetarSorteio);
        document.getElementById('btn-cancelar').addEventListener('click', function() {
            document.getElementById('modal-confirmacao').style.display = 'none';
        });
    }
});