const carica = () => {

    let miaCitta = document.querySelector("input[type='text']").value
    let nuovaOpzione = document.createElement("option")

    nuovaOpzione.setAttribute("value", miaCitta)
    nuovaOpzione.text = miaCitta
    let miaSelect = document.querySelector("#citta")
    miaSelect.options.add(nuovaOpzione, 0)

    alert(miaCitta)

}

const elimina = () => {

    let miaSelect = document.querySelector("#citta")
    miaSelect.remove(miaSelect.selectedIndex)

}