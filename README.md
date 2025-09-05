# Sorteador de Números

Uma aplicação web simples para sortear números aleatórios únicos dentro de um intervalo definido.

## Funcionalidades

- Interface simples e intuitiva
- Sorteio de números únicos (não repete números já sorteados)
- Personalização da quantidade máxima de números a serem sorteados
- Histórico de números sorteados em ordem crescente
- Contador de números restantes
- Função de reset com confirmação

## Como usar

1. Digite a quantidade de números que deseja sortear no campo "Quantidade de números a sortear"
2. Clique no botão "Sortear" para gerar um número aleatório
3. O número sorteado aparecerá em destaque no topo
4. Os números já sorteados aparecem em ordem crescente na seção "Histórico"
5. Use o botão "Resetar" para limpar o histórico e começar novamente

## Regras

- Não é possível sortear o mesmo número duas vezes
- A quantidade máxima deve ser um número positivo maior que zero
- O sorteio é encerrado quando todos os números possíveis forem sorteados

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## Estrutura do projeto

```
sorteio-random/
├── index.html      # Estrutura da página
├── style.css       # Estilos e layout
└── script.js       # Lógica do sorteador
```

## Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela, incluindo dispositivos móveis.
