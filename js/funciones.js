export default function values(arrayMusic, images) {

    const d = document;
    const audio = d.createElement("audio");
    const image = d.createElement("img");
    const imagesContainer = d.querySelector(".images-container");
    const rangoTiempo = d.querySelector("#rangoTiempo");
    const section = d.querySelector(".section");
    let sound =  d.querySelector('.sound')
    let mute =  d.querySelector('.mute')
    const rangoVolumen = document.getElementById("rangoVolumen");
  
    let i = 0;
   
    image.src = images[i];
    imagesContainer.appendChild(image);
    audio.src = arrayMusic[i];
  
    section.addEventListener("click", (e) => {
    
      const claseValor = e.target.classList;
      console.log(claseValor);
  
      switch (claseValor[0]) {
        case "play":
          audio.play();
          break;

        case "pause":
          audio.pause();
          break;

        case "siguiente":
          i++;
          i > arrayMusic.length - 1 ? (i = 0) : "";
  
          audio.src = arrayMusic[i];
          console.log(i);
          image.src = images[i];
          rangoTiempo.value = 0
          break;

        case "anterior":
          i--;
          i < 0 ? (i = arrayMusic.length - 1) : "";
  
          audio.src = arrayMusic[i];
          console.log(i);
          image.src = images[i];
          rangoTiempo.value = 0

          break;

        case "aleatorio":
          i = Math.floor(Math.random() * arrayMusic.length);
          console.log(i);
  
          audio.src = arrayMusic[i];
          image.src = images[i];

          rangoTiempo.value = 0
     
          break;

      }
    });
  
    rangoTiempo.addEventListener("input", (e) => {
        console.log(e.target.value)
      audio.currentTime = (rangoTiempo.value * audio.duration) / 100;
    });
  

    rangoVolumen.addEventListener("input", (e) => {

      audio.volume = e.target.value;
      console.log(audio.volume)
      if(audio.volume == 0){
       
        sound.classList.add('hidden')
        mute.classList.remove('hidden')

      }
      else{
        sound.classList.remove('hidden')
        mute.classList.add('hidden')
      }
      
    });


}




