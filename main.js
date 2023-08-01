var lista_tecla = document.querySelectorAll('.tecla');
var audioEmExecucao = null;

function tocaSom_touch(param_audio) {

    const audio = document.querySelector(param_audio);
    if(audio.currentTime < audio.duration){
    audio.currentTime = 0; 
    }
    audio.play();
}
function paraSom_touch(param_audio) {
    document.querySelector(param_audio).pause()
}
for (let i = 0; i < lista_tecla.length; i++) {



    lista_tecla[i].addEventListener('touchstart', function (event) {
         event.preventDefault();
        let param_class = this.classList[3];
        tocaSom_touch(`.som_${param_class}`);
  

      });

      lista_tecla[i].addEventListener('touchend', function (event) {
        event.preventDefault();
        setTimeout(function(){
        paraSom_touch(`.som_${param_class}`); 
        },400)
 

      });



    
}
