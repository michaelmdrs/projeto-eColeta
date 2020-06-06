function populateUFs() {
    const ufSelect = document.querySelector('select[name=txtUf]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
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

    console.log(event.target.value)

    const ufValue = event.target.value

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch()

}


document
    .querySelector('select[name=txtUf]')
    .addEventListener('change', getCities) /* Ouve todo evento referente ao campo selecionado */