function playAudio(id) {
    var audio = document.getElementById(id);
    audio.play();
}
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