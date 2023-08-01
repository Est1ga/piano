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
}
function paraSom_touch(param_audio) {
    let veri = document.querySelector(param_audio)
    if (veri.currentTime < veri.duration ){
        veri.pause()
    };


}
for (let i = 0; i < lista_tecla.length; i++) {



    lista_tecla[i].addEventListener('touchstart', function () {
        let param_class = this.classList[3];
        tocaSom_touch(`.som_${param_class}`);
  

      });
      
      lista_tecla[i].addEventListener('touchend', function () {
        setTimeout(function(){
        paraSom_touch(`.som_${param_class}`); 
        },1000)
 

      });



    
}
