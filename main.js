var lista_tecla = document.querySelectorAll('.tecla');
var audioEmExecucao = null;

function tocaSom(param_audio) {
    if (audioEmExecucao != null ) {
        audioEmExecucao.pause(); 
    }

    const audio = document.querySelector(param_audio);
    audio.currentTime = 0; 
    audio.play();
    audioEmExecucao = audio; 
}

function tocaSom_touch(param_audio) {

    const audio = document.querySelector(param_audio);
    audio.currentTime = 0; 
    audio.play();
    audioEmExecucao = audio; 
}
function paraSom_touch() {
    if (audioEmExecucao != null ) {
        audioEmExecucao.pause(); 
    }


}
for (let i = 0; i < lista_tecla.length; i++) {

    let touchStarted = false;

    lista_tecla[i].addEventListener('touchstart', function () {
        let param_class = this.classList[3];
        tocaSom_touch(`.som_${param_class}`);
        touchStarted = true;

      });
      lista_tecla[i].addEventListener('touchend', function () {
        //paraSom_touch();
        touchStarted = true;

      });

      if (touchStarted == false) {
        lista_tecla[i].addEventListener('click', function() {
            let param_class = this.classList[3]; 
            tocaSom(`.som_${param_class}`);
        });
    }


    
}
