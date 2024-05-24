let falasCastor = document.getElementById('falaCastor');
desabilitarBotaoProximo()
var imagem = document.getElementById("imagem");
var i = 0;  //INTERVALO PARA TROCAR IMAGEM

let imagens = {
    1: 'imagens/arvore_folhas_1.jpg',
    2: 'imagens/arvore_casca_1.jpg',
    3: 'imagens/arvore_tronco_2.jpg',
    4: 'imagens/arvore_folhas_2.jpg',
    5: 'imagens/Arvore_folhas_doentes.jpg',
    6: 'imagens/arvore_raizes_1.jpg',
    7: 'imagens/arvore_tronco_1.jpg',
    8: 'imagens/arvore_casca_2.jpg',
    9: 'imagens/arvore_galhos_2.jpg',
}

let frases = {
    1: ['Seus galhos estão secos', 'Suas folhas apressentam uma coloração diferente', 'Suas raízes estão com pragas', 'A casca da árvore está se soltando', 'O tronco da árvore está oco'],
    2: ['Suas folhas estão enferrujadas', 'As raízes estão muito expostas', 'Sesu galhos estão com pragas', 'A árvore está sem sua casca', 'O tronco está podre'],
    3: ['A árvore está saudável','Suas folhas estão amareladas','Os galhos da árvore estão secos','As raízes estão podres','O tronco da árvore está oco por dentro'],
    4: ['O tronco está oco e podre','Suas raízes estão doentes','A árvore está saudável','Seus galhos estão caíndo','As folhas apresentam ferrugem'],
    5: ['Seus galhos estão secos', 'Suas raízes estão expostas', 'A casca da árvore está caindo', 'O tronco está oco', 'Não existe nenhum problema com a árvore'],
    6: ['Suas folhas estão com ferrugem','A casca da árvore está podre','As raízes da árvore estão expostas','Pragas estão adoecendo a árvore','Seus galhos secos'],
    7: ['A árvore não possuí raízes','Suas folhas estão caíndo','O tronco está oco por baixo','Os galhos estão podre','A árvore está saúdavel'],
    8: ['Suas folhas estão amareladas','A maioria das cascas da árvore caíram','O tronco da árvore está oco','Suas raízes estão expostas','Todos esses problemas'],
    9: ['O tronco está podre','Suas folhas estão com ferrugem','A árvore está totalmente saúdavel','Os galhos da árvore estão secos','A árvore está com problemas nas raízes'],
}

let displayAnswer = {
    1: displayAnswer2,
    2: displayAnswer4,
    3: displayAnswer5,
    4: displayAnswer5,
    5: displayAnswer1,
    6: displayAnswer3,
    7: displayAnswer3,
    8: displayAnswer2,
    9: displayAnswer4,
}

function mudarFrases(i) {
    const labels = document.querySelectorAll('label[id^="pergunta"]');
    let j=0;
    labels.forEach((label, index) => {
        const texto = frases[i][j]; // Substitua com o texto desejado
        const input = label.querySelector('input');
        label.innerHTML = `${input.outerHTML} ${texto}`;
        j++;
      });
}


function enviar() {
    i = i + 1;
    habilitarBotoes();
    desabilitarBotaoProximo()
    imagem.src = imagens[i];
    if (i in displayAnswer) {
        document.getElementById("enviar").onclick = function () { displayAnswer[i](); };
        mudarFrases(i);
    }
}

function displayAnswer1() {  //Caso a resposta certa for a 1
    if (document.getElementById('option-11').checked) {
        document.getElementById('bloco-11').style.border = '3px solid limegreen'
        document.getElementById('result-11').style.color = 'limegreen'
        desabilitarBotoes();
        exibirBotaoProximo();
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
        exibirBotaoProximo();
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
        exibirBotaoProximo();
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
        exibirBotaoProximo();
    }
    if (document.getElementById('option-15').checked) {
        document.getElementById('bloco-15').style.border = '3px solid red'
        document.getElementById('result-15').style.color = 'red'
        respotasCastorAoErrar();
    }
}

function displayAnswer5() {  //função caso a respota correta seja a 5
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
        exibirBotaoProximo();
    }
}

function desabilitarBotoes() {
    document.getElementById('option-11').disabled = true;
    document.getElementById('option-12').disabled = true;
    document.getElementById('option-13').disabled = true;
    document.getElementById('option-14').disabled = true;
    document.getElementById('option-15').disabled = true;
}

function habilitarBotoes() {
    document.getElementById('option-11').disabled = false;
    document.getElementById('option-12').disabled = false;
    document.getElementById('option-13').disabled = false;
    document.getElementById('option-14').disabled = false;
    document.getElementById('option-15').disabled = false;
}

function exibirBotaoProximo() {
    document.getElementById("proximo").style.display = "block";
    document.getElementById("proximo").disabled = false;
}

function desabilitarBotaoProximo() {
    document.getElementById("proximo").style.display = "none";
    document.getElementById("proximo").disabled = true;
}

//---------------------------------------------
function respotasCastorAoErrar() {
    let aleatorio = Math.floor(Math.random() * (6 - 1));

    let falasErro = [
        'Ops, esta não é a respota correta, tente outra vez.',
        'Não, não é essa a resposta, tente outra vez.',
        'Foi quase, vamos tentar acertar mais uma vez!',
        'Que pena, essa não é a resposta certa, vamos tentar outra resposta!',
        'Nossa, esta foi quase, tente outra resposta.'
    ]

    falasCastor.innerHTML = falasErro[aleatorio];
}