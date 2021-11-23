function pt() {
    var res = document.getElementById("res")
    res.innerHTML = '<img src="imagens/painel/foto1.JPG" alt="painel"> <img src="imagens/painel/foto2.JPG" alt="painel"> <img src="imagens/painel/foto3.JPG" alt="painel"> <img src="imagens/painel/foto4.JPG" alt="painel">'
}

function eps() {
    var res = document.getElementById("res")
    res.innerHTML = '<img src="imagens/eps/eps1.JPG" alt="eps"> <img src="imagens/eps/eps2.JPG" alt="eps"> <img src="imagens/eps/eps3.JPG" alt="eps">'
}

function cer() {
    var res = document.getElementById("res")
    res.innerHTML = '<img src="imagens/cer/cer1.JPG" alt="cer">'
}

var forro = document.getElementById("forro")
var piso = document.getElementById("piso")
var ceramica = document.getElementById("ceramica")
var isopor = document.getElementById("isopor")
var valororc = document.getElementById("valororc")
var alerta = document.getElementById("alertError")
alerta.hidden = true
valororc.hidden = true

function calcular() {
    if (forro.checked && isopor.checked) {
        alerta.hidden = true
        valororc.hidden = false
        valororc.innerHTML = '<strong>O valor médio da laje forro com eps está R$ 52/m².</strong>'
    } if (forro.checked && ceramica.checked) {
        alerta.hidden = true
        valororc.hidden = false
        valororc.innerHTML = '<strong>O valor médio da laje forro com cerâmica está R$ 49/m².</strong>'
    } if (piso.checked && ceramica.checked) {
        alerta.hidden = true
        valororc.hidden = false
        valororc.innerHTML = '<strong>O valor médio da laje piso com cerâmica está R$ 62/m².</strong>'
    } if (piso.checked && isopor.checked) {
        alerta.hidden = true
        valororc.hidden = false
        valororc.innerHTML = '<strong>O valor médio da laje piso com eps está R$ 68/m².</strong>'
    } else if (valororc.hidden == true) {
        alerta.hidden = false 
        
    }
}

//Aqui tem uma alteração teste



