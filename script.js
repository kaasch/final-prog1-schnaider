//random image en index.html
let images = ["/cookie triple con DDL.png", "/cookies and cream.png", "/mantequilla de mani.png", "/red-velvet.png", "/coco.png", "/triple choco.png"];

function getRandomImage() {
  randomIndex = Math.floor(Math.random() * images.length); //obtengo un random index

  if (randomIndex !== Number(localStorage.getItem("index"))) { //si el numero no es igual al del localstorage
    selectedImage = images[randomIndex]; //array con el index (numero random)

    document.getElementById("image_container").src = `./images/cookie${selectedImage}`; //$ para poner variable

    localStorage.setItem("index", randomIndex); //almacena el numero del index en el localstorage

    setTimeout(function () {
      getRandomImage();
    }, 1000);

  } else {

    getRandomImage();

  }
}

//secuencia red velvet acerca.html

 let contador= 1;
 function cambiar(){
   contador++;
     if(contador > 7){
       contador = 1;
     }
   document.getElementById("contenedor-red").src= `./images/velvet/${contador}.png`;
     setTimeout(function () {
       cambiar();
     }, 500);
    }
//lightbox

const imgList = document.querySelectorAll(`.imagen-lightbox`)
const lightbox = document.querySelector(`.lightbox`)
const grande = document.querySelector(`.grande`)
const cerrar = document.querySelector(`.btn-cerrar`)


imgList.forEach((eachImage, index)=>{ //voy a recorrer todas las img con foreach y voy a definir a cada una y el index d c/u añadiendoles un addeventlistener con un click
    imgList[index].addEventListener(`click`, ()=>{

      console.log(eachImage)
      lightbox.classList.add(`activo`) //cuando sucede el evento (click) se le agrega la clase activo
      grande.src = imgList[index].src //se le asigna el src de la imagen clickeada correspondiente

    })

})

cerrar.addEventListener(`click`, ()=>{ 
  lightbox.classList.remove(`activo`)//agrego un evento click donde se remueve la clase activo
})

//mapa en contacto.html

function iniciarMap(){
  let coord = {lat:-34.599789039911855 ,lng: -58.438857773012074};
  let map = new google.maps.Map(document.getElementById('mapa'),{
    zoom: 15,
    center: coord, 
  });
  const marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}


