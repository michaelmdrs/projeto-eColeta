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

    const ufValue = event.target.value

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then(res => res.json() )
    .then( cities => {
        for(const city of cities ) {
            citySelect.innerHTML += `<option value='${cities.id}'>${cities.nome}</option>`
        }

        citySelect.disabled = false
    })
}


document
    .querySelector('select[name=txtUf]')
    .addEventListener('change', getCities) /* Ouve todo evento referente ao campo selecionado */