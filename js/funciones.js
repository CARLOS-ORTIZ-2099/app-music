export default function values(arrayMusic, images) {

    const d = document;
    const container = d.createElement("audio");
    const imagesContainer = d.querySelector(".images-container");
    const image = d.createElement("img");
    const rangoTiempo = document.querySelector("#rangoTiempo");
    const aleatorio = document.querySelector(".aleatorio");
    let sound =  d.querySelector('.sound')
    let mute =  d.querySelector('.mute')
    const rangoVolumen = document.getElementById("rangoVolumen");
  
    let i = 0;
   
    image.src = images[i];
    imagesContainer.appendChild(image);
    container.src = arrayMusic[i];
  
    d.addEventListener("click", (e) => {
    
      const claseValor = e.target.classList;
      console.log(claseValor);
  
      switch (claseValor[0]) {
        case "play":
          container.play();
          break;

        case "pause":
          container.pause();
          break;

        case "siguiente":
          i++;
          i > arrayMusic.length - 1 ? (i = 0) : "";
  
          container.src = arrayMusic[i];
          console.log(i);
          image.src = images[i];
          rangoTiempo.value = 0
          break;

        case "anterior":
          i--;
          i < 0 ? (i = arrayMusic.length - 1) : "";
  
          container.src = arrayMusic[i];
          console.log(i);
          image.src = images[i];
          rangoTiempo.value = 0

          break;

        case "aleatorio":
          i = Math.floor(Math.random() * arrayMusic.length);
          console.log(i);
  
          container.src = arrayMusic[i];
          image.src = images[i];

          rangoTiempo.value = 0
     
          break;

      }
    });
  
    rangoTiempo.addEventListener("input", (e) => {
        console.log(e.target.value)
      container.currentTime = (rangoTiempo.value * container.duration) / 100;
    });
  

    rangoVolumen.addEventListener("input", (e) => {

      container.volume = e.target.value;
      console.log(container.volume)
      if(container.volume == 0){
       
        sound.classList.add('hidden')
        mute.classList.remove('hidden')

      }
      else{
        sound.classList.remove('hidden')
        mute.classList.add('hidden')
      }
      
    });


}




