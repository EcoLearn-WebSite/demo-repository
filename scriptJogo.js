function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
        document.getElementById('bloco-11').style.border = '3px solid limegreen'
        document.getElementById('result-11').style.color = 'limegreen'
        document.getElementById('option-12').disabled = true;
        document.getElementById('option-13').disabled = true;
        document.getElementById('option-14').disabled = true;
        document.getElementById('option-15').disabled = true;
    }
    if (document.getElementById('option-12').checked) {
        document.getElementById('bloco-12').style.border = '3px solid red'
        document.getElementById('result-12').style.color = 'red'
        showCorrectAnswer1()
    }
    if (document.getElementById('option-13').checked) {
        document.getElementById('bloco-13').style.border = '3px solid red'
        document.getElementById('result-13').style.color = 'red'
        showCorrectAnswer1()
    }
    if (document.getElementById('option-14').checked) {
        document.getElementById('bloco-14').style.border = '3px solid red'
        document.getElementById('result-14').style.color = 'red'
        showCorrectAnswer1()
    }
    if (document.getElementById('option-15').checked) {
        document.getElementById('bloco-15').style.border = '3px solid red'
        document.getElementById('result-15').style.color = 'red'
        showCorrectAnswer1()
    }
}

function showCorrectAnswer1() {
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
}