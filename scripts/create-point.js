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
<<<<<<< HEAD

    const indexOfSelectState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then(res => res.json() )
    .then( cities => {
        for(const city of cities ) {
            citySelect.innerHTML += `<option value='${city.id}'>${city.nome}</option>`
=======
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then( res => res.json() )
    .then( cities => {  
        for( const city of cities) {
            citySelect.innerHTML = `<option value='${city.id}'>${city.nome}</option>`
>>>>>>> a867dff0d029af447a5f094f684c11c70d1913f0
        }

        citySelect.disable = false
    })
}


document
    .querySelector('select[name=txtUf]')
    .addEventListener('change', getCities) 
    /* Ouve todo evento referente ao campo selecionado */
    /* O evente só atualiza o valor quando a referência da função por referência for chamada */