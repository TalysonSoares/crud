function acionarBotaoExcluir() {

    btn_remove_all.classList.remove('d-none');

    //document.getElementById('btn_remove_all').remove('d-none');

}

//pegando todos os inputs (checkboxes) que estao na tabela
let todosOsChecks = document.querySelectorAll('[data-acao="check"]');

//percorrendo todos os checkboxes
todosOsChecks.forEach( (cadaCheck) => {
    cadaCheck.addEventListener('click', () => {
        
    })
});

