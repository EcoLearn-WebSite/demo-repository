//Função Modal    
const button = document.querySelector("credits")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

function OpenModal() {
    modal.showModal()
}
buttonClose.onclick = function () {
    modal.close()
}

// Função para tocar som 

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0; // Reinicia o som caso ele já esteja tocando
        sound.play();
    }
}

// Tocando som nos links da tela inicial 
document.querySelectorAll('.sound-link').forEach(link => {
    link.addEventListener('mouseover', () => playSound('audioHover'));
    link.addEventListener('click', () => playSound('audioClick'));
});

// Tocando som no botão de voltar da tela de instruções 
document.getElementById("btnVoltar").addEventListener('mouseover', () => playSound('audioHover'));

// Tocando som nas interações da tela de instruções 
document.querySelectorAll('.img-sintomas').forEach(img => {
    img.addEventListener('mouseover', () => playSound('audioHover'));
    img.addEventListener('click', () => playSound('audioClick'));
});
