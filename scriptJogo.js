let falasCastor = document.getElementById('falaCastor');

function displayAnswer1() {  //Caso a resposta certa for a 1
    if (document.getElementById('option-11').checked) {
        document.getElementById('bloco-11').style.border = '3px solid limegreen'
        document.getElementById('result-11').style.color = 'limegreen'
        desabilitarBotoes();
    }
    if (document.getElementById('option-12').checked) {
        document.getElementById('bloco-12').style.border = '3px solid red'
        document.getElementById('result-12').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-13').checked) {
        document.getElementById('bloco-13').style.border = '3px solid red'
        document.getElementById('result-13').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-14').checked) {
        document.getElementById('bloco-14').style.border = '3px solid red'
        document.getElementById('result-14').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-15').checked) {
        document.getElementById('bloco-15').style.border = '3px solid red'
        document.getElementById('result-15').style.color = 'red'
        respotasCastorAoErrar();
    }
}

/*function showCorrectAnswer1() { //Mostra a 1 como resposta correta
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Mostrar a resposta certa'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
        document.getElementById('block-11').style.border = '3px solid limegreen'
        document.getElementById('result-11').style.color = 'limegreen'
        document.getElementById('result-11').innerHTML = 'Correto!'
        document.getElementById('showanswer1').removeChild(showAnswer1)
    })
}*/


function displayAnswer2() {  //função caso a respota correta seja a 2
    if (document.getElementById('option-11').checked) {
        document.getElementById('bloco-11').style.border = '3px solid red'
        document.getElementById('result-11').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-12').checked) { //CORRETA
        document.getElementById('bloco-12').style.border = '3px solid limegreen'
        document.getElementById('result-12').style.color = 'limegreen'
        desabilitarBotoes();
    }
    if (document.getElementById('option-13').checked) {
        document.getElementById('bloco-13').style.border = '3px solid red'
        document.getElementById('result-13').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-14').checked) {
        document.getElementById('bloco-14').style.border = '3px solid red'
        document.getElementById('result-14').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-15').checked) {
        document.getElementById('bloco-15').style.border = '3px solid red'
        document.getElementById('result-15').style.color = 'red'
        respotasCastorAoErrar();
    }
}

function displayAnswer3() {  //função caso a respota correta seja a 3
    if (document.getElementById('option-11').checked) {
        document.getElementById('bloco-11').style.border = '3px solid red'
        document.getElementById('result-11').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-12').checked) {
        document.getElementById('bloco-12').style.border = '3px solid red'
        document.getElementById('result-12').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-13').checked) { //CORRETA
        document.getElementById('bloco-13').style.border = '3px solid limegreen'
        document.getElementById('result-13').style.color = 'limegreen'
        desabilitarBotoes();
    }
    if (document.getElementById('option-14').checked) {
        document.getElementById('bloco-14').style.border = '3px solid red'
        document.getElementById('result-14').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-15').checked) {
        document.getElementById('bloco-15').style.border = '3px solid red'
        document.getElementById('result-15').style.color = 'red'
        respotasCastorAoErrar();
    }
}

function displayAnswer4() {  //função caso a respota correta seja a 4
    if (document.getElementById('option-11').checked) {
        document.getElementById('bloco-11').style.border = '3px solid red'
        document.getElementById('result-11').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-12').checked) {
        document.getElementById('bloco-12').style.border = '3px solid red'
        document.getElementById('result-12').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-13').checked) {
        document.getElementById('bloco-13').style.border = '3px solid red'
        document.getElementById('result-13').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-14').checked) { //CORRETA
        document.getElementById('bloco-14').style.border = '3px solid limegreen'
        document.getElementById('result-14').style.color = 'limegreen'
        desabilitarBotoes();
    }
    if (document.getElementById('option-15').checked) {
        document.getElementById('bloco-15').style.border = '3px solid red'
        document.getElementById('result-15').style.color = 'red'
        respotasCastorAoErrar();
    }
}

function displayAnswer4() {  //função caso a respota correta seja a 5
    if (document.getElementById('option-11').checked) {
        document.getElementById('bloco-11').style.border = '3px solid red'
        document.getElementById('result-11').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-12').checked) {
        document.getElementById('bloco-12').style.border = '3px solid red'
        document.getElementById('result-12').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-13').checked) {
        document.getElementById('bloco-13').style.border = '3px solid red'
        document.getElementById('result-13').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-14').checked) {
        document.getElementById('bloco-14').style.border = '3px solid red'
        document.getElementById('result-14').style.color = 'red'
        respotasCastorAoErrar();
    }
    if (document.getElementById('option-15').checked) { //CORRETA
        document.getElementById('bloco-15').style.border = '3px solid limegreen'
        document.getElementById('result-15').style.color = 'limegreen'
        desabilitarBotoes();
    }
}

function desabilitarBotoes() {
    document.getElementById('option-11').disabled = true;
    document.getElementById('option-12').disabled = true;
    document.getElementById('option-13').disabled = true;
    document.getElementById('option-14').disabled = true;
    document.getElementById('option-15').disabled = true;
}

function respotasCastorAoErrar() {
    let aleatorio = Math.floor(Math.random() * (6 - 1) + 1);
    

    switch(aleatorio){
        case 1:
            falasCastor.innerHTML = 'Ops, esta não é a respota correta, tente outra vez.';
            break;
        case 2:
            falasCastor.innerHTML = 'Não, não é essa a resposta, tente outra vez.';
            break;
        case 3:
            falasCastor.innerHTML = 'Foi quase, vamos tentar acertar mais uma vez!';
            break;
        case 4:
            falasCastor.innerHTML = 'Que pena, essa não é a resposta certa, vamos tentar outra resposta!';
            break;
        case 5:
            falasCastor.innerHTML = 'Nossa, esta foi quase, tente outra resposta.';
            break;
        default:
            falasCastor.innerHTML = 'teste';
            break;
    }
}