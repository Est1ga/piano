var lista_tecla = document.querySelectorAll('.tecla');
var audioEmExecucao = null;

function tocaSom(param_audio) {
    if (audioEmExecucao != null ) {
        setTimeout(function(){
        audioEmExecucao.pause(); 
        },2000)
        
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
if (audioEmExecucao != null) {
  let volume = audioEmExecucao.volume;
  const fadeOutInterval = 40; // Intervalo de tempo para diminuir o volume em cada etapa (em milissegundos)
  const fadeOutSteps = 10; // Número de etapas para diminuir o volume

  // Função para diminuir o volume em cada etapa
  function fadeOutVolume() {
    if (volume > 0) {
      volume -= 1 / fadeOutSteps; // Diminui o volume em 1/fadeOutSteps em cada etapa
      audioEmExecucao.volume = volume;
      setTimeout(fadeOutVolume, fadeOutInterval); // Chama a função novamente após o intervalo
    } else {
      audioEmExecucao.pause(); // Quando o volume chegar a 0, pausa o áudio
    }
  }

  fadeOutVolume(); // Inicia o processo de diminuir o volume progressivamente
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
        paraSom_touch();
        touchStarted = true;

      });



    
}
