function populateUFs() {
    const ufSelect = document.querySelector('select[name=txtUf]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then( res => res.json() ) /* função anonima com retorno simples */
    .then( states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}</option>`
        }

    } )
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector('select[name=txtCity]')
    
    const stateInput = document.querySelector('input[name=state]')

    const ufValue = event.target.value

    const indexOfSelectState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    /* Para corrigir o problema de escolher o estado e povoar as cidades, não atualizava a lista ao inserir um estado novo 
       A maneira de corrigir esse problema é da seguinte forma */

       citySelect.innerHTML = '<option value>Selecione a cidade</option>' /* Começa com o campo vazio e ao chamar um estado faz o povoamento com as respectivas cidades  */
       citySelect.disabled = true /* Deixa o campo bloqueado esperando o change ser modificado */

    fetch(url)
    .then(res => res.json() )
    .then( cities => {
        
        for(const city of cities ) {
            citySelect.innerHTML += `<option value='${city.nome}'>${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}


document
    .querySelector('select[name=txtUf]')
    .addEventListener('change', getCities) 
    /* Ouve todo evento referente ao campo selecionado */
    /* O evente só atualiza o valor quando a referência da função por referência for chamada */

// Itens de Coleta
// Capturar todos os LI's

const itemsToCollect = document.querySelectorAll('.items-grid li') // Capturo todo os dados do LI ligado a essa classe.

for (const item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem) // Variavel para capturar os eventos
}

function handleSelectedItem(event) { //função para retornar a ação
    const itemLi = event.target

    // add or remove one class javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
}