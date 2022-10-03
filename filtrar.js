function filtrar() {
    let expressao = input_busca.value.toLowerCase(); //valor que o usuario digitous


    //pegando todas as linhas da tabela
    let linhas = tabela_compras.getElementsByTagName('tr'); 

    for (let posicao in linhas) {
        if (isNaN(posicao) ) {
            continue;
        }
    
        let linha = linhas[posicao].innerText.toLowerCase();

        if( linha.includes(expressao) ) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }
}