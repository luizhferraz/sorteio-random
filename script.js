document.addEventListener('DOMContentLoaded', function() {
    const botaoSortear = document.getElementById('sortear');
    const botaoResetar = document.getElementById('resetar');
    const resultado = document.getElementById('resultado');
    const listaHistorico = document.getElementById('lista-historico');
    const contadorFaltantes = document.getElementById('contador-faltantes');
    const numeroMaximo = document.getElementById('numeroMaximo');

    let historico = [];
    let ultimoSorteado = null;

    criarModalConfirmacao();
    atualizarContador();

    botaoSortear.addEventListener('click', function() {
        const max = parseInt(numeroMaximo.value);
        
        if (max < 1) {
            alert('O número máximo deve ser maior que zero!');
            return;
        }

        if(historico.length >= max) {
            resultado.textContent = 'Todos os números foram sorteados!';
            return;
        }

        let numeroSorteado;
        do {
            numeroSorteado = Math.floor(Math.random() * max) + 1;
        } while (historico.includes(numeroSorteado));

        ultimoSorteado = numeroSorteado;
        historico.push(numeroSorteado);
        historico.sort((a, b) => a - b);

        resultado.textContent = numeroSorteado;
        atualizarHistorico();
        atualizarContador();
    });

    botaoResetar.addEventListener('click', function() {
        document.getElementById('modal-confirmacao').style.display = 'flex';
    });

    function atualizarHistorico() {
        listaHistorico.innerHTML = '';
        historico.forEach(numero => {
            const elemento = document.createElement('div');
            elemento.textContent = numero;
            elemento.className = 'numero-historico';
            if (numero === ultimoSorteado && ultimoSorteado !== null) {
                elemento.classList.add('ultimo-sorteado');
            }
            listaHistorico.appendChild(elemento);
        });
    }

    function resetarSorteio() {
        historico = [];
        ultimoSorteado = null;
        resultado.textContent = '-';
        listaHistorico.innerHTML = '';
        document.getElementById('modal-confirmacao').style.display = 'none';
        atualizarContador();
    }

    function atualizarContador() {
        const max = parseInt(numeroMaximo.value);
        const restantes = max - historico.length;
        if (restantes === 0) {
            contadorFaltantes.textContent = 'Todos os números já foram sorteados!';
        } else {
            contadorFaltantes.textContent = `Faltam ${restantes} números a serem sorteados.`;
        }
    }

    function criarModalConfirmacao() {
        const modal = document.createElement('div');
        modal.id = 'modal-confirmacao';
        modal.className = 'modal';
        modal.style.display = 'none';

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

        document.body.appendChild(modal);

        modal.querySelector('#btn-confirmar').addEventListener('click', resetarSorteio);
        modal.querySelector('#btn-cancelar').addEventListener('click', function() {
            document.getElementById('modal-confirmacao').style.display = 'none';
        });
    }
});